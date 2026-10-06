"use client";

import Image from 'next/image';
import Link from 'next/link';
import './faq.scss';
import FaqItem from './faq';

function FaqMaster(){

    return(
        <div className="faqMaster">

            <h2>¿Tienes preguntas?</h2>

            <p className="faq__comment">Lo que más nos preguntan antes de una poda o una tala:</p>
            
            <FaqItem
            titulo="¿Cuándo hay que podar un árbol?"
            explicacion="Cuando tiene ramas secas, rotas o que cargan hacia la casa, cuando ha crecido tanto que molesta o da miedo con el viento, o cuando hace años que nadie lo toca. En cuanto a la época, los pinos se podan mejor de finales de otoño a finales de invierno, las palmeras en los meses fríos y los árboles de hoja caduca cuando han perdido la hoja." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuándo es mejor talar que podar?"
            explicacion="Cuando el árbol está seco, muy enfermo, inclinado con riesgo de caer o dañando la casa con las raíces. Si se puede salvar con una buena poda, te lo diremos: talar es el último recurso, no el primero." 
            ></FaqItem>

            <FaqItem
            titulo="¿Qué incluye la poda en altura?"
            explicacion="Subir a la copa con arnés o con plataforma, quitar las ramas secas o peligrosas, aligerar el peso y dejar el árbol equilibrado. Incluye bajar las ramas de forma controlada, retirar todos los restos y dejar la zona barrida." 
            ></FaqItem>

            <FaqItem
            titulo="¿Necesito permiso para podar o talar un árbol?"
            explicacion="Para podar, normalmente no. Para talar, en muchos municipios sí, sobre todo en suelo urbano: en València, por ejemplo, se pide con el trámite MA.LC.15 de tala o trasplante. Los árboles monumentales están protegidos por ley. Cuando vamos a verlo te decimos si hace falta y te preparamos el informe técnico del árbol, para que el ayuntamiento tenga todo lo que necesita desde el primer día." 
            ></FaqItem>

            <FaqItem
            titulo="¿Qué hacéis con los restos de la poda?"
            explicacion="Nos los llevamos todos. Las ramas se trituran o se cargan en el camión y van a un gestor autorizado. Si hay madera aprovechable, te la dejamos troceada para la chimenea si la quieres." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto tardáis en podar un árbol?"
            explicacion="Un pino o una palmera de tamaño normal suele llevar entre una y tres horas. Si el árbol es muy grande o hay que trabajar con mucho cuidado por la casa o los cables, puede ocupar la jornada entera. Te lo decimos antes de empezar." 
            ></FaqItem>

            <FaqItem
            titulo="¿Quitáis los bolsones de procesionaria?"
            explicacion="Sí, también los que están en lo más alto del pino. Lo ideal es hacerlo en invierno, antes de que las orugas bajen al suelo, que es cuando más peligro tienen para niños y perros." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cómo sé si mi palmera tiene picudo rojo?"
            explicacion="Los avisos más claros son las hojas del centro caídas o torcidas, hojas mordisqueadas y una copa que se abre como un paraguas. Si ves algo así, mándanos una foto cuanto antes: si está muy afectada, hay que talarla antes de que la copa se caiga y retirarla con cuidado para no extender la plaga." 
            ></FaqItem>

            <FaqItem
            titulo="¿El presupuesto es gratis?"
            explicacion="Sí. Con unas fotos por WhatsApp muchas veces ya podemos orientarte, y si hace falta vamos a verlo. El precio te lo damos antes de empezar y sin compromiso." 
            ></FaqItem>

            <FaqItem
            titulo="¿Qué riesgos tiene la poda en altura?"
            explicacion="Para quien no tiene experiencia, muchos: caídas, ramas que golpean al bajar o motosierras trabajando en altura. Por eso trabajamos con arnés, equipo de trepa o plataforma, acotamos la zona y tenemos seguro de responsabilidad civil." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto cuesta la poda en altura?"
            explicacion="Una poda en altura sencilla suele empezar en unos 150-200 euros. A partir de ahí depende de la altura, del acceso, de lo cerca que esté de la casa y de los restos que haya que retirar. Te damos el precio exacto antes de empezar." 
            ></FaqItem>

        </div>
    );

}

export default FaqMaster;
