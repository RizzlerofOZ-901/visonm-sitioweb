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
        <section className="flex min-h-[calc(100vh-4rem)] flex-col mb-4 px-4">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                Pagina de servicios
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
        
    );
}