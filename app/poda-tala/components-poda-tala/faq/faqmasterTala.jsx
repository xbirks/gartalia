"use client";

import Image from 'next/image';
import Link from 'next/link';
import './faq.scss';
import FaqItem from './faq';

function FaqMaster() {
    return (
      <div className="faqMaster">
        <h2>¿Tienes preguntas sobre nuestro servicio de tala?</h2>
        <p className="faq__comment">Aquí tienes una lista con preguntas frecuentes sobre tala de árboles y palmeras:</p>
  
        <FaqItem
          titulo="¿Cuándo es necesario talar un árbol o una palmera?"
          explicacion="Es necesario talar un árbol o palmera cuando representa un peligro por estar enfermo, seco, debilitado o con riesgo evidente de caída. También cuando sus raíces están dañando estructuras como tuberías, aceras o edificios, o cuando las normativas municipales así lo requieren."
        ></FaqItem>
  
        <FaqItem
          titulo="¿Qué incluye el servicio de tala en altura?"
          explicacion="Nuestro servicio de tala en altura incluye el corte y desmontaje controlado del árbol o palmera utilizando técnicas seguras y maquinaria especializada, como plataformas elevadoras o grúas, para asegurar la protección del entorno y evitar daños."
        ></FaqItem>
  
        <FaqItem
          titulo="¿Necesito permisos para talar árboles o palmeras en Valencia?"
          explicacion="Sí, en Valencia es obligatorio solicitar permisos municipales para realizar talas en terrenos urbanos o espacios públicos. Nosotros gestionamos todos los trámites necesarios con el Ayuntamiento, agilizando el proceso y evitando preocupaciones."
        ></FaqItem>
  
        <FaqItem
          titulo="¿Qué ocurre con los restos generados tras la tala?"
          explicacion="Nos encargamos de gestionar completamente los residuos generados durante la tala. Los restos vegetales se retiran y se gestionan mediante trituración y reciclaje ecológico, cumpliendo todas las normativas ambientales y dejando tu espacio limpio y despejado."
        ></FaqItem>
  
        <FaqItem
          titulo="¿Cuánto tiempo tardáis normalmente en talar un árbol o palmera?"
          explicacion="El tiempo para talar un árbol o palmera suele oscilar entre 1 y 3 horas, dependiendo de la complejidad del trabajo, tamaño de la planta y accesibilidad. En casos de alta dificultad o situaciones especiales, el proceso podría extenderse algo más, siempre informándote previamente del tiempo estimado."
        ></FaqItem>
  
        <FaqItem
          titulo="¿Realizáis talas urgentes en caso de peligro inminente?"
          explicacion="Sí, ofrecemos un servicio urgente de tala inmediata cuando existe un peligro inminente para las personas o propiedades. Nuestro equipo especializado está preparado para intervenir rápidamente, garantizando la seguridad del entorno."
        ></FaqItem>
  
        <FaqItem
          titulo="¿Ofrecéis presupuestos gratuitos para tala en altura?"
          explicacion="Sí, ofrecemos presupuestos gratuitos y personalizados para trabajos de tala en altura. Realizamos una visita previa para evaluar la situación concreta del árbol o palmera y poder proporcionarte un presupuesto ajustado y sin compromiso."
        ></FaqItem>
  
        <FaqItem
          titulo="¿Cuánto cuesta la tala en altura?"
          explicacion="El precio de la tala en altura suele partir desde los 200 euros aproximadamente, dependiendo de factores como la altura y tamaño del árbol o palmera, la dificultad del acceso y la gestión de residuos posterior. Ofrecemos presupuestos personalizados adaptados a cada situación."
        ></FaqItem>
  
      </div>
    );
  }
  

export default FaqMaster;