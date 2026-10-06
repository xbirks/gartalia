"use client";

import Image from 'next/image';
import Link from 'next/link';
import './location.scss';

import StandardButton from '../../buttons/standardButton.jsx';

function Location(){

    return(
        <div className="location__master">
            <h3 className="location__title">¿Dónde necesitas que vayamos?</h3>
            <p className="location__description">
                Trabajamos en Valencia y en los pueblos y urbanizaciones de alrededor, sobre todo en el Camp de Túria y l’Horta: <strong>Llíria, Bétera, Paterna, La Pobla de Vallbona, Riba-roja, Benaguasil, Godella, La Eliana, Náquera, Olocau, Marines y Casinos</strong>, y urbanizaciones como Mas Camarena, Torre en Conill, Santa Bárbara o La Cañada.
                <br></br><br></br>
                Son zonas de chalets con pinos y palmeras que en veinte o treinta años han crecido mucho más de lo previsto, muchas veces pegados a la casa, a la piscina o a la valla del vecino. Es justo el trabajo que mejor hacemos.
                <br></br><br></br>
                Mándanos unas fotos por WhatsApp o rellena el formulario. Vamos a verlo y te damos el precio antes de empezar, sin compromiso.</p>

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