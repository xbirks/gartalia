"use client";

import Image from 'next/image';
import './nosotros.scss';

import StandardButton from '../../buttons/standardButton.jsx';
import BotonesContacto from '../contacto/botonesContacto';
import Review from './review.jsx';
import Carlos from '../../assets/img/carlos-correa.jpg';
import Equipo from '../../assets/img/equipo-gartalia.jpg';
import { FICHA_GOOGLE } from '../../lib/seo';
import { TOTAL_OPINIONES, resenasDe } from '../../lib/resenas';

// Reseñas de trabajos en altura, con citas literales (los cortes van marcados con […]).
const RESENAS_HOME = resenasDe('Alejandro', 'Raquel', 'David', 'Beatriz', 'Alberto', 'Rosa');

export function Resenas(){
    return(
        <div className="nosotros__master" id="opiniones">
            <h2 className="review__title">Lo que dicen nuestros clientes</h2>

            <div className="review__list">
                {RESENAS_HOME.map((r) => <Review key={r.id} resena={r} />)}
            </div>

            <div className="review__buttons">
                <StandardButton
                link={FICHA_GOOGLE}
                title={`Leer las ${TOTAL_OPINIONES} opiniones en Google`}
                style="emptyStandardButton">
                </StandardButton>
            </div>
        </div>
    );
}

// Las reseñas (<Resenas />) van aparte, justo después de la portada, en todas las páginas.
function nosotros(){

    return(
        <div className="nosotros__master">
            {/* La Q de Halyard tiene la cola cortada en horizontal y a este tamaño se ve rara: solo esa letra va en Neue Haas Unica */}
            <h2 className="nosotros__title"><span className="nosotros__q">Q</span>uién está detrás de Gartalia</h2>
            <div className="nosotros__tarjeta">
                <Image src={Carlos} alt="Carlos Correa, fundador de Gartalia"></Image>
                <div className="nosotros__tarjeta-info">
                    <p><strong>Carlos Correa</strong> · fundador</p>
                </div>
            </div>
            <p className="nosotros__description">
                <strong>Carlos Correa</strong> lleva más de 20 años trabajando con árboles en altura y se ha especializado en lo que casi nadie quiere hacer: <strong>podar y talar árboles grandes y difíciles</strong>. Comprometido con su trabajo y excelente en lo que hace, cuida cada detalle para que todo quede impecable. Va a ver el árbol, te explica paso a paso cómo se hará sin causar ningún daño y, en el momento, te da un precio que luego respeta.
                <br></br><br></br>
                Su equipo está a la misma altura. Entrenado por él y con muchos años de experiencia, toma siempre <strong>todas las medidas de seguridad</strong>, trabaja con las mejores herramientas y el mejor material del mercado y, cuando el árbol lo pide, se apoya en camiones y cestas elevadoras. Y no se va hasta dejarlo todo recogido.
                <br></br><br></br>
                Su precio es el de un oficio bien aprendido, y no siempre el más bajo. Carlos y su equipo transmiten tanta confianza que muchos clientes les encargan el trabajo <strong>sin pedir otros presupuestos</strong>. Los han elegido los ayuntamientos de La Eliana y Llíria, el resort El Oasis y el Club de Tenis El Collao. Y ya suman <strong>más de 450 trabajos en altura</strong>.
            </p>

            <h3 className="nosotros__subtitulo">Nuestro equipo de trabajo</h3>
            <figure className="nosotros__equipo">
                <Image src={Equipo} alt="Equipo de Gartalia, con casco y camiseta verde, junto a un pino talado" sizes="(max-width: 1100px) 100vw, 1000px" loading="lazy"></Image>
            </figure>

            <BotonesContacto ubicacion="nosotros" />
        </div>
    );
}

export default nosotros;
