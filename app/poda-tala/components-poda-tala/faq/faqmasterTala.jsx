"use client";

import Image from 'next/image';
import Link from 'next/link';
import './faq.scss';
import FaqItem from './faq';

function FaqMaster(){

    return(
        <div className="faqMaster">

            <h2>¿Tienes preguntas sobre la tala?</h2>

            <p className="faq__comment">Lo que más nos preguntan antes de talar un árbol o una palmera:</p>
            
            <FaqItem
            titulo="¿Cuándo hay que talar un árbol o una palmera?"
            explicacion="Cuando está seco, muy enfermo o inclinado con riesgo de caer, cuando las raíces están dañando la casa, las tuberías o la piscina, o cuando una palmera tiene el picudo rojo avanzado. Si el árbol se puede salvar con una poda, te lo diremos antes." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cómo taláis un árbol pegado a la casa?"
            explicacion="Por partes. En lugar de tumbarlo entero, subimos y lo desmontamos desde arriba, tramo a tramo, bajando cada trozo de forma controlada. Es más lento, pero es la forma de no tocar el tejado, la piscina, la valla ni los cables." 
            ></FaqItem>

            <FaqItem
            titulo="¿Necesito permiso para talar un árbol?"
            explicacion="En muchos municipios sí, sobre todo en suelo urbano. En València se pide con el trámite MA.LC.15 y hay que justificar el motivo. Los árboles monumentales están protegidos por ley. Te decimos si tu caso lo necesita y te preparamos el informe técnico del árbol, para que la solicitud llegue completa desde el primer día." 
            ></FaqItem>

            <FaqItem
            titulo="¿Qué pasa con el tronco, las ramas y el tocón?"
            explicacion="Nos llevamos todos los restos a un gestor autorizado. Si quieres la madera, te la dejamos troceada para la chimenea. El tocón lo podemos quitar con destoconadora para que no rebrote." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto tardáis en talar un árbol?"
            explicacion="Un árbol o una palmera de tamaño normal suele llevar entre una y tres horas. Un pino grande que hay que desmontar por partes junto a una casa puede ocupar la jornada entera. Te lo decimos antes de empezar." 
            ></FaqItem>

            <FaqItem
            titulo="¿Hacéis talas urgentes?"
            explicacion="Sí. Si un árbol se ha caído o está a punto de caer sobre la casa, la calle o un coche, llámanos al 657 170 847: estos avisos los atendemos antes que el resto de trabajos." 
            ></FaqItem>

            <FaqItem
            titulo="¿Trabajáis con seguro?"
            explicacion="Sí, trabajamos con seguro de responsabilidad civil. Aun así, la mejor garantía es no necesitarlo: acotamos la zona, usamos el equipo adecuado y planificamos cada corte antes de hacerlo." 
            ></FaqItem>

            <FaqItem
            titulo="¿El presupuesto es gratis?"
            explicacion="Sí. Mándanos fotos por WhatsApp o rellena el formulario, y si hace falta vamos a verlo. El precio te lo damos antes de empezar y sin compromiso." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cuánto cuesta talar un árbol?"
            explicacion="Una tala en altura suele empezar en unos 200 euros. A partir de ahí depende de la altura, de si hay que desmontar el árbol por partes, del acceso y de los restos que haya que retirar. Te damos el precio exacto antes de empezar." 
            ></FaqItem>

        </div>
    );

}

export default FaqMaster;
