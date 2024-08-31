import sharp from 'sharp';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { name, tel, service, location, images } = req.body; // Asume que `images` es un array de cadenas base64

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });


    const attachments = await Promise.all(images.map(async (image, index) => {
        const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (!matches) {
            console.error("Invalid image data for image index " + index);
            return null; // Continuar con el siguiente archivo.
        }

        let buffer = Buffer.from(matches[2], 'base64');
        const imageType = matches[1].split('/')[1].toLowerCase(); // to handle 'jpeg', 'jpg' or 'png'

        // Convertir HEIC a JPEG y reducir tamaño
        if (imageType === 'heic' || imageType === 'jpeg' || imageType === 'jpg' || imageType === 'png') {
            buffer = await sharp(buffer)
              .resize(1024) // Cambia el ancho a 1024px, ajustando la altura para mantener la proporción.
              .jpeg({ quality: 80 }) // Cambiar la calidad a 80 si es JPEG.
              .toBuffer();
        }

        return {
            filename: `Image${index + 1}.${imageType === 'heic' ? 'jpeg' : imageType}`,
            content: buffer,
            encoding: 'base64'
        };
    }).filter(x => x)); // Filtra cualquier null que pueda haber sido añadido.

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'gartaliacontacto@gmail.com',
        subject: `NUEVO TRABAJO para ${name}`,
        html: `<p>Nombre: ${name}</p><p>Teléfono: ${tel}</p><p>Servicio: ${service}</p><p>Ubicación: ${location}</p>`,
        attachments
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: "Failed to send email", detail: error.toString() });
    }
}
