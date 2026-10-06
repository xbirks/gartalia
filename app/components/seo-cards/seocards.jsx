"use client";

import Image from 'next/image';
import Link from 'next/link';
import './seocards.scss';
import Card from './card';

//IMG
import pinoAltura from '../../assets/img/seo-2.jpg';
import palmera from '../../assets/img/grua.jpg';
import parcela from '../../assets/img/desbroce-parcela.jpg'; // Pexels, foto 15211861 (licencia Pexels: uso comercial sin atribución)


function SeoCards({municipio}){
    // municipio llega como "" en la home o como "en Paterna" en las páginas de pueblo
    const en = municipio ? ` ${municipio}` : '';

    return(

        <div className="seoCards">
            <Card
            title={`¿Un pino demasiado grande o inclinado${en}?`}
            info={
                <>
                Es la consulta que más recibimos: pinos que hace veinte años eran pequeños y hoy pasan de los 15 metros, inclinados hacia la casa o con ramas secas encima del tejado. Lo primero es verlo de cerca y decidir si basta con <strong>podarlo</strong> o si hay que <strong>talarlo</strong>.
                <br /><br />
                Si hay que talar, lo hacemos por partes y con la zona acotada, aunque el árbol esté a un metro de la fachada. Trabajamos con seguro de responsabilidad civil y, cuando terminamos, no queda ni una rama en el suelo.
                </>
            }
            img={pinoAltura}
            alt="Tala en altura de un pino con arnés y motosierra"
            mensaje={`Hola, tengo un pino muy grande o inclinado${en} y quiero que lo veáis.`}
            >
            </Card>

            <Card
            title={`Poda y tala de palmeras${en}`}
            info={
                <>
                Las palmeras necesitan una limpieza de hojas secas y racimos cada uno o dos años, y en Valencia hay que vigilarlas por el <strong>picudo rojo</strong>. Una palmera seca o con la copa caída puede venirse abajo, así que no conviene dejarla.
                <br /><br />
                Subimos con arnés o con plataforma según la altura y el acceso, limpiamos o talamos y nos llevamos todas las hojas, que abultan y pesan más de lo que parece.
                </>
            }
            img={palmera}
            alt="Poda de una palmera alta desde una plataforma elevadora"
            mensaje={`Hola, quiero pedir presupuesto para podar o talar una palmera${en}.`}
            >
            </Card>

            <Card
            title={`Parcelas limpias antes del verano${en}`}
            info={
                <>
                Cada año los ayuntamientos recuerdan que las parcelas tienen que estar desbrozadas antes del verano por el riesgo de incendio. En Llíria, por ejemplo, el ayuntamiento llegó a abrir cientos de expedientes por parcelas sin limpiar.
                <br /><br />
                Desbrozamos, quitamos árboles secos y nos llevamos todo lo cortado. Hemos limpiado parcelas de <strong>3.000 m² en tres días</strong>.
                </>
            }
            img={parcela}
            alt="Operario con equipo de protección desbrozando una parcela de hierba alta"
            mensaje={`Hola, quiero pedir presupuesto para limpiar una parcela${en}.`}
            >
            </Card>

        </div>
    )

};

export default SeoCards;
