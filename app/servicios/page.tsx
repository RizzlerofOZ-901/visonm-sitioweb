import Image from "next/image";
import {proyectos} from "./proyectos";
export default function servicios(){

    return(
        <section className="flex min-h-[calc(100vh-4rem)] flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                Pagina de servicios
                {proyectos.map((foto, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-md">
                    <Image src={foto.src} alt={foto.alt} width={800} height={600} className="w-full h-auto transition-transform duration-500 hover:scale-105"/>
                </div>
                ))}
            </div>
        </section>
    );
}