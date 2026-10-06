import sharp from 'sharp';
import nodemailer from 'nodemailer';
import { escapar, enUnaLinea, avisarN8n } from '../../app/lib/contactos';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '7mb', // Cambia aquí el límite de tamaño del cuerpo
    },
  },
};

const MAX_FOTOS = 10;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, tel, service, location, images } = req.body || {};
  const fotos = Array.isArray(images) ? images.slice(0, MAX_FOTOS) : [];

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const adjuntos = await Promise.all(fotos.map(async (image, index) => {
    const matches = typeof image === 'string' && image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches) {
      console.error("Invalid image data for image index " + index);
      return null; // Continuar con el siguiente archivo.
    }

    let buffer = Buffer.from(matches[2], 'base64');
    const imageType = matches[1].split('/')[1].toLowerCase(); // Manejar 'jpeg', 'jpg', 'png', etc.

    // Convertir HEIC a JPEG y reducir tamaño
    if (imageType === 'heic' || imageType === 'jpeg' || imageType === 'jpg' || imageType === 'png') {
      try {
        buffer = await sharp(buffer)
          .resize(900) // Cambia el ancho a 900px, ajustando la altura para mantener la proporción.
          .jpeg({ quality: 40 }) // Cambiar la calidad a 40 para reducir tamaño.
          .toBuffer();
      } catch (error) {
        console.error(`No se pudo procesar la imagen ${index + 1}:`, error.message);
        return null;
      }
    }

    return {
      filename: `Image${index + 1}.${imageType === 'heic' ? 'jpeg' : imageType}`,
      content: buffer,
      encoding: 'base64'
    };
  }));
  const attachments = adjuntos.filter(Boolean);

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'gartaliacontacto@gmail.com',
    subject: `NUEVO TRABAJO para ${enUnaLinea(name)}`,
    html: `
      <p>Nombre: ${escapar(name)}</p>
      <p>Teléfono: ${escapar(tel, 40)}</p>
      <p>Servicio: ${escapar(service)}</p>
      <p>Ubicación: ${escapar(location)}</p>
    `,
    attachments
  };

  await avisarN8n({
    origen: 'formulario-presupuesto',
    nombre: enUnaLinea(name),
    telefono: enUnaLinea(tel, 40),
    servicio: enUnaLinea(service),
    ubicacion: enUnaLinea(location),
    fotos: attachments.length,
  });

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
