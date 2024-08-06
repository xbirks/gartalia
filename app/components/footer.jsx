"use client";

import Image from 'next/image';
import Link from 'next/link';
import '../style.scss';

import ImgButton from '../buttons/imgbutton';
import StandardButton from '../buttons/standardButton';
import HeroBanner from './cabecera/heroBanner';
import FooterForm from '../contactFormFooter';
import SeoAnchor from './footer/seoAnchor';
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
            </div>
            <HeroBanner></HeroBanner>
            <div className="footer__contacto">
                <h4 className="footer__contacto-title">Somos jardineros, <span>¿podemos ayudarte?</span></h4>
                <StandardButton
                link="tel:+34658677423"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>

                <FooterForm></FooterForm>
            </div>

            <div className="footer__seo-anchor">
            <SeoAnchor link="/eliana" pueblo="La Eliana"></SeoAnchor>
            <SeoAnchor link="/cullera" pueblo="Cullera"></SeoAnchor>
            <SeoAnchor link="/cheste" pueblo="Cheste"></SeoAnchor>
            <SeoAnchor link="/benifaio" pueblo="Benifaió"></SeoAnchor>
            <SeoAnchor link="/alboraya" pueblo="Alboraya"></SeoAnchor>
            <SeoAnchor link="/rocafort" pueblo="Rocafort"></SeoAnchor>
            <SeoAnchor link="/gandia" pueblo="Gandia"></SeoAnchor>
            <SeoAnchor link="/godella" pueblo="Godella"></SeoAnchor>
            <SeoAnchor link="/alzira" pueblo="Alzira"></SeoAnchor>
            <SeoAnchor link="/chiva" pueblo="Chiva"></SeoAnchor>
            <SeoAnchor link="/pobla-de-vallbona" pueblo="Pobla de Vallbona"></SeoAnchor>
            <SeoAnchor link="/moncada" pueblo="Moncada"></SeoAnchor>
            <SeoAnchor link="/paterna" pueblo="Paterna"></SeoAnchor>
            <SeoAnchor link="/ribarroja" pueblo="Ribarroja del Turia"></SeoAnchor>
            <SeoAnchor link="/puçol" pueblo="Puçol"></SeoAnchor>
            <SeoAnchor link="/montserrat" pueblo="Montserrat"></SeoAnchor>
            <SeoAnchor link="/alfafar" pueblo="Alfafar"></SeoAnchor>
            <SeoAnchor link="/camarena" pueblo="Camarena"></SeoAnchor>
            <SeoAnchor link="/vilamarxant" pueblo="Vilamarxant"></SeoAnchor>
            <SeoAnchor link="/náquera" pueblo="Náquera"></SeoAnchor>
            <SeoAnchor link="/buriassot" pueblo="Buriassot"></SeoAnchor>
            <SeoAnchor link="/manises" pueblo="Manises"></SeoAnchor>
            <SeoAnchor link="/silla" pueblo="Silla"></SeoAnchor>
            <SeoAnchor link="/benaquasil" pueblo="Benaquasil"></SeoAnchor>
            <SeoAnchor link="/picassent" pueblo="Picassent"></SeoAnchor>
            <SeoAnchor link="/alginet" pueblo="Alginet"></SeoAnchor>
            <SeoAnchor link="/liria" pueblo="Liria"></SeoAnchor>
            <SeoAnchor link="/torrent" pueblo="Torrent"></SeoAnchor>
            <SeoAnchor link="/mislata" pueblo="Mislata"></SeoAnchor>
            <SeoAnchor link="/albal" pueblo="Albal"></SeoAnchor>
            <SeoAnchor link="/sedavi" pueblo="Sedaví"></SeoAnchor>

            </div>

            <div className="footer__politicas">
                <StandardButton
                link="/"
                title="Aviso legal"
                style="emptyStandardButton">
                </StandardButton>
                <StandardButton
                link="/"
                title="Política de privacidad"
                style="emptyStandardButton">
                </StandardButton>
                <StandardButton
                link="/"
                title="Política de cookies"
                style="emptyStandardButton">
                </StandardButton>

            </div>
        </div>

    )

};

export default Footer;