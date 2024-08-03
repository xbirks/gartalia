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

    const attachments = images.map((image, index) => {
        const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
            throw new Error("Invalid input string for image index " + index);
        }
        return {
            filename: `Image${index + 1}.${matches[1].split('/')[1]}`, // Dynamic filename with extension
            content: matches[2], // Base64 encoded content
            encoding: 'base64'
        };
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'andres03ortega@gmail.com, aom.contacto@gmail.com',
        subject: `Mensaje de ${name}`,
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
