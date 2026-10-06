import React, { useState } from 'react';
import Link from 'next/link';

function FooterForm() {
    const [tel, setTel] = useState('');
    const [status, setStatus] = useState(''); // Añadido para manejar los estados de éxito o error

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus(''); // Resetear el estado antes de enviar
        // Se aceptan espacios y +34; lo que cuenta es que haya al menos 9 cifras.
        if (tel.replace(/\D/g, '').length < 9) {
            setStatus('telefono');
            return;
        }

        const response = await fetch('/api/footerEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tel })
        });

        if (response.ok) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Tu teléfono"
                required
                inputMode="tel"
                autoComplete="tel"
            />
            <button type="submit" className="form__send-button">
                <p>Enviar</p>
            </button>
            <p className="footer__legal">Al pulsar «Enviar» aceptas nuestra <Link href="/legal/privacidad">política de privacidad</Link>.</p>
            {status === 'success' && <p className="success-message">¡Qué bien! Hemos recibido tu mensaje.</p>}
            {status === 'error' && <p className="error-message">¡Oh no! Algo ha fallado. Llámanos al 657 170 847.</p>}
            {status === 'telefono' && <p className="error-message">Revisa el teléfono: faltan cifras.</p>}
        </form>
    );
}

export default FooterForm;
