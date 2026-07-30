import Image from "next/image";

export default function Footer(){
    return(
        <footer className="bg-gray-500">
            <div className="container mx-auto flex flex-col items-center py-10 gap-y-3">
                {/*Informacion de empresa*/}
                <div className="flex items-center gap-5">
                    {/*Vision M*/}
                    <div className="flex items-center gap-2">
                        <Image src="/gallery/Logo.png" alt="Logo" width={100} height={100} className="h-10 w-auto"/>
                        <span>Vision M</span>
                    </div>
                    {/*Redes sociales*/}
                    <div className="flex items-center">
                        <span>Redes sociales</span>
                    </div>
                </div>
                {/*Copyright*/}
                <div className="flex justify-center">
                    <span>Copyright 2026</span>
                </div>
            </div>
        </footer>
    );
}