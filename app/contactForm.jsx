import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./style.scss";
import IconPresupuesto from "./assets/img/icon_presupuesto.svg";
import Compressor from 'compressorjs';

// Sin titulo ni texto sale la cabecera de siempre («Pide presupuesto»); la home y los pueblos le ponen la suya (components/presupuesto).
function ContactForm({ titulo, texto }) {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '', // Nuevo campo de correo electrónico
    service: '',
    location: '',
    images: [] 
  });
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [status, setStatus] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      new Compressor(file, {
        quality: 0.6,
        maxWidth: 1920,
        maxHeight: 1080,
        success(result) {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = () => {
            setFormData(prev => ({
              ...prev,
              images: [...prev.images, reader.result]
            }));
            setSelectedFiles(prev => [...prev, result.name]);
          };
        },
        error(err) {
          console.error('Error during image compression:', err.message);
        },
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Se aceptan espacios y +34; lo que cuenta es que haya al menos 9 cifras.
    if (formData.tel.replace(/\D/g, '').length < 9) {
      setStatus('telefono');
      return;
    }
    if (!acceptedPolicy) {
      setStatus('error');
      alert('No has aceptado la Política de Privacidad.');
      return;
    }

    try {
      const response = await fetch('/api/sentEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', tel: '', email: '', service: '', location: '', images: [] }); // Resetear formulario incluyendo email
        setSelectedFiles([]);
        setAcceptedPolicy(false);
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="form__master">
      <div className="form__header">
        <div className="form__header-text">
          <h2>{titulo ?? <>Pide <br /> presupuesto</>}</h2>
          <p className="tel_anchor">{texto ?? <>o llama directamente al <Link className="tel_anchor" href="tel:+34657170847">657 170 847</Link></>}</p>
        </div>
        <Image id="iconpresu" src={IconPresupuesto} alt="Icono de Presupuesto" />
      </div>

      <form onSubmit={handleSubmit} className="form__inputs" encType="multipart/form-data">

        <input
          type="text"
          name="name"
          placeholder="¿Cómo te llamas?"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="tel"
          placeholder="¿Cuál es tu teléfono?"
          value={formData.tel}
          onChange={handleChange}
          required
          inputMode="tel"
          autoComplete="tel"
        />
{/* 
        <input
          type="email" // Tipo email para validación automática
          name="email" // Nombre del campo
          placeholder="¿Cuál es tu correo?" // Placeholder solicitado
          value={formData.email}
          onChange={handleChange}
          required
        /> */}

        <input
          type="text"
          name="service"
          placeholder="¿Qué necesitas? Ej.: talar un pino"
          value={formData.service}
          onChange={handleChange}
          required
        />


        <input
          type="text"
          name="location"
          placeholder="¿En qué municipio estás?"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input type="file" id="file-upload" name="image" multiple onChange={handleFileChange} style={{ display: 'none' }} />
        <label htmlFor="file-upload" className="custom-file-upload">Sube fotos del árbol o de la parcela (opcional)</label>
        <div className="file-selected">
          {selectedFiles.length > 0 ? selectedFiles.join(', ') : 'Ninguna foto seleccionada'}
        </div>

        <label className="label__checkbox">
          <input type="checkbox" checked={acceptedPolicy} onChange={() => setAcceptedPolicy(!acceptedPolicy)} />
          <p>He leído y acepto la <Link href="/legal/privacidad">política de privacidad</Link>.</p>
        </label>

        <button type="submit" disabled={!acceptedPolicy} className="form__send-button">
          <p>Enviar</p>
        </button>

      </form>

      {status === 'success' && <p className="success-message">¡Qué bien! Hemos recibido tu mensaje.</p>}
      {status === 'error' && <p className="error-message">¡Oh no! Algo ha fallado. Llámanos al 657 170 847.</p>}
      {status === 'telefono' && <p className="error-message">Revisa el teléfono: faltan cifras.</p>}
    </div>
  );
}

export default ContactForm;
