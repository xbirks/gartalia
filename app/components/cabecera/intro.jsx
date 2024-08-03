"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../../style.scss";
import "./intro.scss";
import StandardButton from '@/app/buttons/standardButton';
import ContactForm from '../../contactForm';
import HeroBanner from './heroBanner';



function Intro(){

    return(

        <div className="intro__master">
            <h1>Contrata <span className="intro__h1-high">los mejores</span> servicios de jardinería en Valencia</h1>

            <div className="intro__mejores-servicios">
            <StandardButton
             link="https://ermo.es"
             title="Creación y diseño de jardines"
             style="emptyStandardButton">
            </StandardButton>
            
            <StandardButton
             link="https://ermo.es"
             title="Mantenimiento de comunidades"
             style="emptyStandardButton">
            </StandardButton>
            
            <StandardButton
             link="https://ermo.es"
             title="Montajes de riego por aspersión"
             style="emptyStandardButton">
            </StandardButton>
            
            <StandardButton
             link="https://ermo.es"
             title="Poda y tala en altura"
             style="emptyStandardButton">
            </StandardButton>
            </div>


            <ContactForm></ContactForm>
            <div style={{ marginTop: '6vh'}}></div>
            <HeroBanner></HeroBanner>

        </div>


    );
}

export default Intro;