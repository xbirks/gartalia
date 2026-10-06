"use client";

import Image from 'next/image';
import Link from 'next/link';
import './nosotros.scss';

import StandardButton from '../../buttons/standardButton.jsx';
import Review from './review.jsx';
import Carlos from '../../assets/img/carlos-correa.jpg'


function nosotros(){

    return(
        <div className="nosotros__master">
            <h2 className="nosotros__title">Quién está detrás de Gartalia</h2>
            <div className="nosotros__tarjeta">
                <Image src={Carlos} alt="Carlos Correa, fundador de Gartalia"></Image>
                <div className="nosotros__tarjeta-info">
                    <p><strong>CEO</strong> - Carlos Correa</p>
                </div>
            </div>
            <p className="nosotros__description">
                <strong>Carlos Correa</strong> lleva más de 20 años trabajando con árboles en Valencia y se ha especializado en lo que casi nadie quiere hacer: <strong>podar y talar en altura</strong> árboles grandes y difíciles. Es quien va a ver el árbol, te explica paso a paso cómo se va a hacer el trabajo y qué medidas de seguridad vamos a tomar, y te da un precio que luego respeta.
                <br></br><br></br>
                En cada trabajo está él con su equipo, de principio a fin, y no se van hasta dejarlo todo recogido. Han confiado en ellos el <strong>Ayuntamiento de La Eliana</strong>, el <strong>Ayuntamiento de Llíria</strong>, el resort El Oasis de La Eliana y el Club de Tenis El Collao, además de cientos de particulares.
                </p>
                <div className="location__buttons">
                <StandardButton
                link="https://wa.me/message/44EBMJCUV7LNO1"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>
            </div>


            <h2 className="review__title">Nuestros clientes opinan</h2>

            <div className="review__list">
                <Review
                title="Alejandro"
                review="Después de venir varias empresas y comentarnos que no se podía hacer, muy grande y muy peligroso… esta empresa taló el árbol en un solo día. Lo dejaron todo perfecto (pese a la dificultad) y, sobre todo, muy preocupados por la seguridad de los operarios y de la gente de alrededor. Una maravilla."
                time="Escrito el 12/07/2026">
                </Review>

                <Review
                title="David"
                review="Llamé a Carlos de urgencia porque tenía un pino de 70 años en muy mal estado. Vino a presupuestar súper rápido y a explicarme cómo trabajan… ¡Ni un fallo! Han trabajado sin parar y de forma muy segura, y José es un máquina cortando en altura. Para rematar, me han dejado el chalet más limpio de como lo encontraron."
                time="Escrito el 23/06/2026">
                </Review>

                <Review
                title="Marta"
                review="Contacté para un desbrozado de 3.000 m². En poco tiempo (3 días) lo terminó con su cuadrilla, con un trabajo impecable. Carlos es muy buen profesional y resolutivo. Os lo recomiendo."
                time="Escrito el 17/09/2026">
                </Review>
            </div>

             <p className="review__ask-review">
             ¿Ya hemos trabajado para ti? <strong>Cuéntalo en Google</strong>: a otros vecinos les ayuda a decidirse y a nosotros nos ayuda más de lo que parece. Y si todavía estás pensando qué hacer con ese árbol, lee las más de 95 reseñas que tenemos o <strong>pídenos presupuesto</strong> sin compromiso.
             </p>

             <div className="review__buttons">
                <StandardButton
                link="https://g.page/r/CbwuUZbFLjXpEAE/review"
                title="Dejar reseña"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="https://maps.app.goo.gl/bnh6pKARVGWfLXUK8"
                title="Ver reseñas"
                style="emptyStandardButton">
                </StandardButton>
             </div>

        </div>
    );
}

export default nosotros;