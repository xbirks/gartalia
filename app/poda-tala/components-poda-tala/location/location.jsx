"use client";

import Image from 'next/image';
import Link from 'next/link';
import './location.scss';

import StandardButton from '../../../buttons/standardButton.jsx';
import { enlaceWhatsApp, mensajeFurgoneta } from '../../../lib/whatsapp';
import { useDeLaFurgoneta } from '../../../components/contacto/origen';

function Location({ municipio }){

    // municipio llega como "en Bétera" (o "en Valencia" en /poda-tala)
    const en = municipio ? ` ${municipio}` : '';
    const furgoneta = useDeLaFurgoneta();

    return(
        <div className="location__master">
            <h3 className="location__title">¿Qué árbol necesitas podar o talar?</h3>
            <p className="location__description">
            Podamos y talamos los árboles que más se ven en los jardines y parcelas de Valencia: <strong>pinos, palmeras, olivos, algarrobos, cipreses, chopos, eucaliptos, moreras y ficus</strong>, entre otros. Cada uno se trabaja de una manera: no es lo mismo limpiar una palmera de 12 metros que bajar un pino inclinado sobre una casa.
            <br /><br />
            Trabajamos en Valencia y alrededores, sobre todo en el Camp de Túria y l’Horta: <strong>Llíria, Bétera, Paterna, La Pobla de Vallbona, Riba-roja, Godella, La Eliana, Náquera</strong> y sus urbanizaciones. Mándanos fotos por WhatsApp y te decimos qué necesita tu árbol y cuánto cuesta.</p>

            <div className="location__buttons">
                <StandardButton
                link={enlaceWhatsApp(furgoneta ? mensajeFurgoneta(`poda y tala de árboles${en}`) : `Hola, os mando unas fotos de un árbol que tengo${en} para que me digáis qué necesita y cuánto cuesta.`)}
                title="WhatsApp"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="#presupuesto"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>
            </div>

            <div className="location__seo-link">
                <Link href="/">Poda y tala en Valencia</Link>
                <Link href="/municipios/manises">Poda y tala en Manises</Link>
                <Link href="/municipios/eliana">Poda y tala en La Eliana</Link>
                <Link href="/municipios/godella">Poda y tala en Godella</Link>
                <Link href="/municipios/mascamarena">Poda y tala en Mas Camarena</Link>
                <Link href="/municipios/betera">Poda y tala en Bétera</Link>
                <Link href="/municipios/torre-en-conill">Poda y tala en Torre en Conill</Link>
                <Link href="/municipios/benaguasil">Poda y tala en Benaguasil</Link>
                <Link href="/municipios/casinos">Poda y tala en Casinos</Link>
                <Link href="/municipios/turis">Poda y tala en Turís</Link>
                <Link href="/municipios/marines">Poda y tala en Marines</Link>
                <Link href="/municipios/naquera">Poda y tala en Náquera</Link>
                <Link href="/municipios/pobla-de-vallbona">Poda y tala en La Pobla de Vallbona</Link>
                <Link href="/municipios/paterna">Poda y tala en Paterna</Link>
                <Link href="/municipios/canada">Poda y tala en La Cañada</Link>
                <Link href="/municipios/rocafort">Poda y tala en Rocafort</Link>
                <Link href="/municipios/massarojos">Poda y tala en Massarrojos</Link>
                <Link href="/municipios/burjassot">Poda y tala en Burjassot</Link>
                <Link href="/municipios/olocau">Poda y tala en Olocau</Link>
                <Link href="/municipios/liria">Poda y tala en Llíria</Link>
                <Link href="/municipios/campoolivar">Poda y tala en Campolivar</Link>
                <Link href="/municipios/santabarbara">Poda y tala en Santa Bárbara</Link>
                <Link href="/municipios/calicanto">Poda y tala en Calicanto</Link>
            </div>


        </div>


    );
}

export default Location;