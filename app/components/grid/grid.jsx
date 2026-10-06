"use client";

import Image from 'next/image';
import Link from 'next/link';
import './grid.scss';

import StandardButton from '../../buttons/standardButton.jsx';
import { WHATSAPP_WEB, enlaceWhatsApp } from '../../lib/whatsapp';


function Grid({service, description, img, alt, top, link, mensaje}){

    return(

        <div className="grid__master">
            <div className="grid__img">
                <Image src={img} alt={alt || service.trim()}  width={733} height={490} loading="lazy"></Image>
                {top === 'block' && <div className="top-solicitado"><p>MÁS SOLICITADO</p></div>}
            </div>

            <div className="grid__info">

            <a href={link}><h3 className="grid__service">{service}</h3></a>
            <p className="grid__description">{description}</p>
            <div className="grid__buttons">
                <StandardButton
                link={mensaje ? enlaceWhatsApp(mensaje) : WHATSAPP_WEB}
                title="WhatsApp"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Pedir presupuesto"
                style="emptyStandardButton">
                </StandardButton>
            </div>

            </div>

        </div>


    );
}

export default Grid;
