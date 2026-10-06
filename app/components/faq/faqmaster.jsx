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
            titulo="¿Cómo trabajáis para que no haya riesgos para mi casa?"
            explicacion="Antes de empezar, Carlos va a ver el árbol y te explica paso a paso cómo lo vamos a hacer: por dónde se corta, cómo se baja cada trozo y qué zona hay que dejar libre. Si el árbol está pegado a la casa o encima del tejado, no lo tiramos entero: lo desmontamos por partes desde arriba y bajamos cada trozo de forma controlada, con la zona acotada." 
            ></FaqItem>

            <FaqItem
            titulo="¿Tenéis seguro de responsabilidad civil?"
            explicacion="Sí. Es lo primero que conviene preguntar a cualquier empresa que vaya a subirse a un árbol junto a tu casa: si algo sale mal y no tiene seguro, el problema es tuyo. Con nosotros, cada trabajo está cubierto." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto cuesta talar un pino o podar una palmera?"
            explicacion="Depende sobre todo de la altura, de lo cerca que esté de la casa o de los cables, de si hay que bajarlo por partes y de cuántos restos hay que retirar. Por eso no damos precios a ciegas: nos mandas unas fotos o vamos a verlo, y te damos el precio antes de empezar, sin compromiso."
            ></FaqItem>

            <FaqItem
            titulo="¿Hace falta permiso del ayuntamiento para talar un árbol?"
            explicacion="En muchos municipios sí, sobre todo en suelo urbano. En València, por ejemplo, se pide con el trámite MA.LC.15 y hay que justificar el motivo de la tala. Cada ayuntamiento tiene sus normas, así que cuando vamos a ver el árbol te decimos si hace falta y, si quieres, nos encargamos nosotros del papeleo."
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
