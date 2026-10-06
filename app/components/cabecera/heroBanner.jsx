"use client";

import Image from 'next/image';
import "./intro.scss";
import certificados from '../../assets/img/icon_certificados.svg';


function HeroBanner(){

    return(

        <div className="hero__master">
            <div className="hero__element hero__1">
                <p>+20</p>
                <p>años de<br></br>experiencia</p>
            </div>
            <div className="hero__element hero__2">
                <Image src={certificados} alt="Icono de profesionales certificados"></Image>
                <p>Profesionales<br></br>certificados</p>
            </div>
            <div className="hero__element hero__3">
                <p>4,9</p>
                <p>estrellas en<br></br>Google, con<br></br>+95 reseñas</p>
            </div>
            <div className="hero__element hero__4">
                <p>100%</p>
                <p>trabajos<br></br>asegurados</p>
            </div>
            <div className="hero__element hero__5">
                <p>LIMPIO</p>
                <p>lo dejamos<br></br>todo<br></br>recogido</p>
            </div>
        </div>

    )

};

export default HeroBanner;