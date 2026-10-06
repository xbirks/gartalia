"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import StandardButton from '../../buttons/standardButton.jsx';
import { WHATSAPP_WEB, enlaceWhatsApp } from '../../lib/whatsapp';

function Card({title, info, img, alt, mensaje}){

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
                link={mensaje ? enlaceWhatsApp(mensaje) : WHATSAPP_WEB}
                title="WhatsApp"
                style="emptyStandardButton">
                </StandardButton>
            </div>
            <Image className="card__img" src={img} alt={alt} width={750} height={696} loading='lazy'></Image>
        </div> 
    );

}

export default Card;