"use client";
import { useState } from "react";

import Image from "next/image";
import {proyectos} from "./proyectos";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function servicios(){
    const [index,setIndex] = useState(-1);
    return(
    <div className="min-h-[calc(100vh-4rem)]">
        <section className="mb-8 flex flex-col items-center justify-center">
            <h1 className="text-2xl">Algunos de nuestros proyectos</h1>
            <span>Estos son algunos de los trabajos que hemos realizado a lo largo del tiempo, es nuestro hogar, nuestro equipo y también lo que hacemos por ti</span>
        </section>
        <section className="flex flex-col mb-6 px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                
                {proyectos.map((foto,fotoIndex) => (
                <div key={foto.id} onClick={() => setIndex(fotoIndex)}   className="mb-6 break-inside-avoid overflow-hidden rounded-xl shadow-md">
                    <Image src={foto.src} alt={foto.alt} width={800} height={600} className="w-full h-auto rounded-xl transition-transform duration-500 hover:scale-105"/>
                </div>
                ))}
                <Lightbox
                    plugins={[Zoom]} open={index >= 0} close={() => setIndex(-1)} index={index} slides={proyectos}
                />
            </div>
        </section>
    </div>
    );
}