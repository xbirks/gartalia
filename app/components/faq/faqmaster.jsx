"use client";

import Image from 'next/image';
import Link from 'next/link';
import './faq.scss';
import FaqItem from './faq';

function FaqMaster(){

    return(
        <div className="faqMaster">

            <h2>¿Tienes preguntas?</h2>

            <p className="faq__comment">Te dejamos aquí una lista con preguntas frecuentes:</p>
            
            <FaqItem
            titulo="¿Qué servicios de mantenimiento de comunidades ofrecen en Valencia?"
            explicacion="En Gartalia, nos encargamos de mantener bonitas las áreas verdes de tu comunidad. Ofrecemos todo lo necesario para que los jardines siempre luzcan bien, como cortar el césped, podar las plantas y cuidar las flores. Si vives en Valencia y tu comunidad necesita que alguien se ocupe del jardín, nosotros podemos ayudarte." 
            ></FaqItem>

            <FaqItem
            titulo="¿Cómo se determinan los precios de los servicios de jardinería?"
            explicacion="Nuestros precios se basan en el tamaño del área a trabajar, los servicios específicos solicitados y la frecuencia del mantenimiento. Ofrecemos presupuestos personalizados sin compromiso para que nuestros clientes en Valencia puedan entender claramente los costos antes de tomar una decisión." 
            ></FaqItem>

            
            <FaqItem
            titulo="¿Cuáles son los principales riesgos asociados con los servicios de jardinería y cómo los manejan?"
            explicacion="En la jardinería, algunos riesgos incluyen el uso de herramientas afiladas y el manejo de productos químicos para las plantas. En Gartalia, tomamos estos riesgos muy en serio y siempre usamos equipo de protección como guantes y gafas para mantenernos seguros. Además, entrenamos a todos nuestros trabajadores para que sepan usar las herramientas y los productos de manera segura y efectiva. " 
            ></FaqItem>

        </div>
    );

}

export default FaqMaster;