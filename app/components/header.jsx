import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderLogo from '../assets/icon/gartalia_header_logo.svg';
import HeaderName from '../assets/icon/gartalia_name_logo.svg';
import HeaderTree from '../assets/icon/gartalia_tree_logo.svg';
import ImgButton from '../buttons/imgbutton';
import WhatsAppCabecera from './contacto/whatsappCabecera';
import IconServicios from '../assets/img/icon_servicios.svg';
import IconInstalaciones from '../assets/img/icon_instalaciones.svg';
import IconMantenimiento from '../assets/img/icon_mantenimiento.svg';

function Header() {
    return (
        <div className="header__master">
            <div>
                {/* Los logos se cargan al momento (priority): están arriba del todo y, en diferido, tardaban en aparecer en el móvil.
                    Son tres versiones según el ancho (style.scss) y pesan unos 15 KB entre todas. */}
                <Link href="/" className="header__logo">
                    <Image className="header__var-logo1" src={HeaderLogo} alt="Gartalia, poda y tala en altura en Valencia" height={50} width={217} priority />
                    <Image className="header__var-logo2" src={HeaderName} alt="Gartalia" height={50} width={150} priority />
                    <Image className="header__var-logo3" src={HeaderTree} alt="Gartalia" height={50} width={53} priority />
                </Link>
            </div>

            <div className="header__nav">
                <ImgButton
                    link="/#servicios"
                    title="Poda y tala"
                    style="imgButton__white imgb1"
                    icon={IconServicios}
                />
                <ImgButton
                    link="/#parcelas"
                    title="Parcelas"
                    style="imgButton__white imgb2"
                    icon={IconMantenimiento}
                />
                <ImgButton
                    link="/#preguntas"
                    title="Preguntas"
                    style="imgButton__white imgb3"
                    icon={IconInstalaciones}
                />
            </div>

            <WhatsAppCabecera />
        </div>
    );
}

export default Header;
