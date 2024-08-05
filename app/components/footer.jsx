"use client";

import Image from 'next/image';
import Link from 'next/link';
import '../style.scss';

import '../components/cabecera/intro.scss';

import ImgButton from '../buttons/imgbutton';
import StandardButton from '../buttons/standardButton';
import HeroBanner from './cabecera/heroBanner';
import FooterForm from '../contactFormFooter';
//IMG
import HeaderLogoFooter from '../assets/icon/gartalia_header_logo-footer.svg';
import IconServicios from '../assets/img/icon_servicios-dark.svg'
import IconInstalaciones from '../assets/img/icon_instalaciones-dark.svg'
import IconMantenimiento from '../assets/img/icon_mantenimiento-dark.svg'

function Footer(){

    return(
        <div className="footer__master">
            <div className="footer__resume">
                <div className="footer__logo">
                    <Image src={HeaderLogoFooter} alt="logotipo para el footer de Gartalia" width={217} height={50} loading='lazy'></Image>
                </div>
                <div className="header__nav">
                <ImgButton
                    link="https://ermo.es"
                    title="Servicios"
                    style="imgButton__white imgb1"
                    icon={IconServicios}
                ></ImgButton>

                <ImgButton
                    link="https://ermo.es"
                    title="Mantenimiento"
                    style="imgButton__white imgb2"
                    icon={IconMantenimiento}
                ></ImgButton>

                <ImgButton
                    link="https://ermo.es"
                    title="Instalaciones"
                    style="imgButton__white imgb3"
                    icon={IconInstalaciones}
                ></ImgButton>
                </div>
            </div>
            <HeroBanner></HeroBanner>
            <div className="footer__contacto">
                <h4 className="footer__contacto-title">Somos jardineros, <span>¿podemos ayudarte?</span></h4>
                <StandardButton
                link="https://ermo.es"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="https://ermo.es"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>

                <FooterForm></FooterForm>
            </div>
        </div>

    )

};

export default Footer;