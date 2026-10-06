"use client";

import Image from 'next/image';
import Link from 'next/link';
import './faq.scss';
import FaqItem from './faq';

function FaqMaster(){

    return(
        <div className="faqMaster">

            <h2>¿Tienes preguntas?</h2>

            <p className="faq__comment">Estas son las dudas que más nos plantean antes de un trabajo:</p>

            <FaqItem
            titulo="¿Cuánto cuesta talar un pino o podar una palmera?"
            explicacion="Depende sobre todo de la altura, de lo cerca que esté de la casa o de los cables, de si hay que bajarlo por partes y de cuántos restos hay que retirar. Por eso no damos precios a ciegas: nos mandas unas fotos o vamos a verlo, y te damos el precio antes de empezar, sin compromiso."
            ></FaqItem>

            <FaqItem
            titulo="¿Hace falta permiso del ayuntamiento para talar un árbol?"
            explicacion="En muchos municipios sí, sobre todo en suelo urbano. En València, por ejemplo, se pide con el trámite MA.LC.15 y hay que justificar el motivo de la tala. Cada ayuntamiento tiene sus normas, así que cuando vamos a ver el árbol te decimos si hace falta y, si quieres, nos encargamos nosotros del papeleo."
            ></FaqItem>

            <FaqItem
            titulo="¿Podéis talar un árbol pegado a la casa o encima del tejado?"
            explicacion="Sí, es de los trabajos que más hacemos. En lugar de tirar el árbol entero, lo desmontamos por partes desde arriba y bajamos cada trozo de forma controlada, para que no toque el tejado, la piscina ni la valla. Antes de empezar revisamos la zona y la acotamos."
            ></FaqItem>

            <FaqItem
            titulo="¿Qué hacéis con los restos y la madera?"
            explicacion="Nos lo llevamos todo: ramas, hojas y troncos. Si te interesa la leña, te la dejamos troceada para la chimenea y apilada donde nos digas. Al terminar barremos el jardín y, si ha caído algo fuera, también la calle."
            ></FaqItem>

            <FaqItem
            titulo="¿Cuál es la mejor época para podar pinos y palmeras?"
            explicacion="Los pinos, en los meses fríos, de finales de otoño a finales de invierno, cuando el árbol está en reposo. Las palmeras, también en invierno: con el frío el picudo rojo está menos activo y los cortes de la poda le atraen menos. Si una rama o una palmera es peligrosa, no hay que esperar a la época: se quita cuando haga falta."
            ></FaqItem>

            <FaqItem
            titulo="¿Atendéis urgencias?"
            explicacion="Sí. Si un árbol se ha caído o amenaza con caer sobre la casa, la calle o un coche, llámanos al 657 170 847 y lo atendemos antes que el resto de trabajos."
            ></FaqItem>

            <FaqItem
            titulo="¿También limpiáis parcelas?"
            explicacion="Sí. Desbrozamos parcelas y terrenos de cualquier tamaño, quitamos árboles secos y nos llevamos todos los restos. Muchos ayuntamientos obligan a tenerlas limpias antes del verano por el riesgo de incendio, y algunos ya sancionan a quien no lo hace."
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto cuesta el presupuesto?"
            explicacion="Nada. Mándanos fotos por WhatsApp o rellena el formulario de arriba contando lo que necesitas. Si hace falta, vamos a verlo y te damos el precio sin compromiso."
            ></FaqItem>


        </div>
    );

}

export default FaqMaster;
