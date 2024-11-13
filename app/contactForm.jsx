import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./style.scss";
import IconPresupuesto from "./assets/img/icon_presupuesto.svg";
import Compressor from 'compressorjs';

function ContactForm() {
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
          <h4>Pide <br /> presupuesto</h4>
          <p>o llama directamente al <Link href="tel:+34658677423">657 170 847</Link></p>
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
          maxLength="9"
        />

        <input
          type="email" // Tipo email para validación automática
          name="email" // Nombre del campo
          placeholder="¿Cuál es tu correo?" // Placeholder solicitado
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="No seleccionado">Selecciona un servicio</option>

          <option value="Poda y tala en altura">Poda y tala en altura</option>
          <option value="Diseño de jardines">Diseño de jardines</option>
          <option value="Paisajismo">Paisajismo</option>
          <option value="Desrame de árboles">Desrame de árboles</option>
          <option value="Recogida y disposición de residuos">Recogida y disposición de residuos</option>
          <option value="Limpieza de parcelas">Limpieza de parcelas</option>
          <option value="Mantenimiento de césped">Mantenimiento de césped</option>
          <option value="Mantenimiento de comunidades">Mantenimiento de comunidades</option>
          <option value="Limpieza de áreas verdes">Limpieza de áreas verdes</option>
          <option value="Riego por aspersión">Riego por aspersión</option>
          <option value="Iluminación para el jardín">Iluminación para el jardín</option>
          <option value="Instalación de cercas, cipreses y muros verdes">Instalación de cercas, cipreses y muros verdes</option>
          <option value="Control fitosanitario">Control fitosanitario</option>
          <option value="Instalación de jardines verticales">Instalación de jardines verticales</option>
          <option value="Poda de seguridad para ramas peligrosas">Poda de seguridad para ramas peligrosas</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="¿En que municipio?"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input type="file" id="file-upload" name="image" multiple onChange={handleFileChange} style={{ display: 'none' }} />
        <label htmlFor="file-upload" className="custom-file-upload">Haz click y sube fotos que nos ayuden a saber el estado del jardín</label>
        <div className="file-selected">
          {selectedFiles.length > 0 ? selectedFiles.join(', ') : 'Ninguna foto seleccionada'}
        </div>

        <label className="label__checkbox">
          <input type="checkbox" checked={acceptedPolicy} onChange={() => setAcceptedPolicy(!acceptedPolicy)} />
          <p>Por favor, lee y acepta nuestras políticas de privacidad antes de enviar la petición de presupuesto. Puedes leerlas haciendo <Link href="/legal/privacidad">click aquí.</Link></p>
        </label>

        <button type="submit" disabled={!acceptedPolicy} className="form__send-button">
          <p>Enviar</p>
        </button>

      </form>

      {status === 'success' && <p className="success-message">¡Qué bien! Hemos recibido tu mensaje.</p>}
      {status === 'error' && <p className="error-message">¡Oh no! Algo ha fallado. Llámanos al 658 677 423.</p>}
    </div>
  );
}

export default ContactForm;
