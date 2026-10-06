import nodemailer from 'nodemailer';
import { escapar, enUnaLinea, avisarN8n } from '../../app/lib/contactos';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { tel } = req.body || {};

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'gartaliacontacto@gmail.com',
        subject: 'Nuevo Número de Teléfono Recibido',
        text: `Teléfono: ${enUnaLinea(tel, 40)}`,
        html: `<b>Teléfono:</b> ${escapar(tel, 40)}`,
    };

    await avisarN8n({ origen: 'formulario-pie', telefono: enUnaLinea(tel, 40) });

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email successfully sent', info: info.response });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
}
