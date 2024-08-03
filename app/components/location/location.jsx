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
                En <strong>Gartalia</strong>, cubrimos toda la provincia de Valencia, desde la ciudad hasta los pueblos más pequeños. Atendemos a lugares como <strong>Llíria, Bétera, Paterna, La Pobla de Vallbona, Ribarroja del Turia, Benaguacil, Godella, La Eliana, Casinos, Marines, Olocau y Náquera</strong>. Nos adaptamos a cada área para ofrecer el mejor servicio posible, manteniendo jardines y áreas verdes en condiciones óptimas. Estamos siempre disponibles para ofrecerte soluciones personalizadas, sea donde sea que te encuentres <strong>en Valencia</strong>.
                <br></br><br></br>
                Además, estamos comprometidos con ofrecer <strong>servicios de jardinería accesibles y eficientes</strong>, lo que nos permite responder rápidamente a las necesidades de nuestros clientes en cualquier parte de la provincia. Nuestro equipo se desplaza con todo el equipo necesario para asegurar que cada proyecto se complete a la perfección, independientemente de la ubicación. 
                <br></br><br></br>
                Este enfoque flexible y dedicado nos ha permitido construir relaciones duraderas con nuestros clientes, quienes confían en nosotros para mantener sus espacios verdes saludables y atractivos año tras año.</p>

            <div className="location__buttons">
                <StandardButton
                link="https://ermo.es"
                title="Contactar"
                style="standardButton">
                </StandardButton>

                <StandardButton
                link="https://ermo.es"
                title="Presupuesto"
                style="emptyStandardButton">
                </StandardButton>
            </div>

            <div className="location__seo-link">
                <Link href="#">Jardineros en Valencia</Link>
                <Link href="#">Jardineros en Manises</Link>
                <Link href="#">Jardineros en La Eliana</Link>
                <Link href="#">Jardineros en Godella</Link>
                <Link href="#">Jardineros en Mas Camarena</Link>
                <Link href="#">Jardineros en Bétera</Link>
                <Link href="#">Jardineros en Torre en Conill</Link>
                <Link href="#">Jardineros en Benaguacil</Link>
                <Link href="#">Jardineros en Casinos</Link>
                <Link href="#">Jardineros en Turis</Link>
                <Link href="#">Jardineros en Marines</Link>
                <Link href="#">Jardineros en Náquera</Link>
                <Link href="#">Jardineros en La Pobla de Vallbona</Link>
                <Link href="#">Jardineros en Paterna</Link>
                <Link href="#">Jardineros en La Cañada</Link>
                <Link href="#">Jardineros en Rocafort</Link>
                <Link href="#">Jardineros en Massarrojos</Link>
                <Link href="#">Jardineros en Burjassot</Link>
                <Link href="#">Jardineros en Olocau</Link>
                <Link href="#">Jardineros en Liria</Link>
            </div>


        </div>


    );
}

export default Location;