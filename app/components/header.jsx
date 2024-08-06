"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderLogo from '../assets/icon/gartalia_header_logo.svg';
import HeaderName from '../assets/icon/gartalia_name_logo.svg';
import HeaderTree from '../assets/icon/gartalia_tree_logo.svg';
import ImgButton from '../buttons/imgbutton';
import StandardButton from '../buttons/standardButton';
import IconServicios from '../assets/img/icon_servicios.svg'
import IconInstalaciones from '../assets/img/icon_instalaciones.svg'
import IconMantenimiento from '../assets/img/icon_mantenimiento.svg'


function Header(){

    return(
        <div className="header__master">
            <div>
                <Link href="/" className="header__logo">
                    <Image className="header__var-logo1" src={HeaderLogo} alt="logotipo principal para el Header" height={50} width={217}></Image>
                    <Image className="header__var-logo2" src={HeaderName} alt="logotipo principal para el Header" height={50} width={150}></Image>
                    <Image className="header__var-logo3" src={HeaderTree} alt="logotipo principal para el Header" height={50} width={53}></Image>
                </Link>
            </div>
        
            <div className="header__nav">
                <ImgButton
                    link="#servicios"
                    title="Servicios"
                    style="imgButton__white imgb1"
                    icon={IconServicios}
                ></ImgButton>

                <ImgButton
                    link="#mantenimiento"
                    title="Mantenimiento"
                    style="imgButton__white imgb2"
                    icon={IconMantenimiento}
                ></ImgButton>

                <ImgButton
                    link="#instalaciones"
                    title="Instalaciones"
                    style="imgButton__white imgb3"
                    icon={IconInstalaciones}
                ></ImgButton>
            </div>

            <StandardButton
             link="tel:+34658677423"
             title="Llamar"
             style="standardButton">
            </StandardButton>


        </div>
    );
}

export default Header;