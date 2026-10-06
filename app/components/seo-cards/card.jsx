"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import StandardButton from '../../buttons/standardButton.jsx';
import { WHATSAPP_WEB, enlaceWhatsApp, mensajeFurgoneta, enMinuscula } from '../../lib/whatsapp';
import { useDeLaFurgoneta } from '../contacto/origen';

// servicio: lo que dice el WhatsApp de quien viene de la furgoneta (si no se pasa, «poda y tala en altura»).
function Card({title, info, img, alt, mensaje, servicio}){

    const furgoneta = useDeLaFurgoneta();
    const whatsapp = furgoneta
        ? enlaceWhatsApp(mensajeFurgoneta(servicio ? enMinuscula(servicio) : undefined))
        : (mensaje ? enlaceWhatsApp(mensaje) : WHATSAPP_WEB);

    return(
        <div className="card">
            <div className="card__info">
                <h3 className="card__title">{title}</h3>
                <p className="card__info">{info}</p>
                <StandardButton
                link="#presupuesto"
                title="Pedir presupuesto"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link={whatsapp}
                title="WhatsApp"
                style="emptyStandardButton">
                </StandardButton>
            </div>
            <Image className="card__img" src={img} alt={alt} width={750} height={696} loading='lazy'></Image>
        </div> 
    );

}

export default Card;