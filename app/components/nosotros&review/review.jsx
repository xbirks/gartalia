"use client";

import Image from 'next/image';
import './nosotros.scss';
import stars from '../../assets/img/stars.svg';
import google from '../../assets/img/google-icon.svg';


// Tarjeta de reseña: el autor con el servicio y, debajo, el pueblo y el mes.
function Review({ resena }){
    const { nombre, servicio, lugar, mes, texto } = resena;

    return(

        <div className="review__tarjeta">
            <div className="review__tarjeta-star">
                <Image className="review__stars" src={stars} alt="5 estrellas" width={170} height={40}></Image>
                <Image className="review__google" src={google} alt="Reseña de Google" width={40} height={40}></Image>
            </div>

            <h4 className="review__author">{nombre} · {servicio}</h4>
            <p className="review__description">{texto}</p>
            <p className="review__time">{lugar ? `${lugar} · ` : ''}{mes}</p>

        </div>

    );
}

export default Review;
