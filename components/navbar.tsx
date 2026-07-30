import Link from "next/link";
import Image from "next/image";
import {Button} from "./ui/button"


/*Exports the navbar that includes the different routs where we can navigate*/

export default function Navbar(){
    return(
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
{/*Left side*/} 
                <Link href='/' className="flex items-center gap-2 text-xl font-semibold">
                    <Image src="/gallery/Logo.png" alt="Logo" width={100} height={100} className="h-10 w-auto"/>
                    <span>Vision M</span>
                </Link>
{/*Right side*/}
                <div>
                    <Link href='/servicios'>
                        <Button variant="ghost" className="text-gray-700 hover:bg-[#FFBF00]">Sevicios</Button>
                    </Link>
                    <Link href='/acerca'>
                        <Button variant="ghost" className="text-gray-700 hover:bg-[#FFBF00]">Acerca de</Button>
                    </Link>
                    <Link href='/cotizaciones'>
                        <Button variant="ghost" className="text-gray-700 hover:bg-[#FFBF00]">Cotizaciones</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}