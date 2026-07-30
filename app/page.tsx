import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent,} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"

export default function Home() {
  const trabajosRealizados =[{
    id:1,
    src:"/carrusel/Carrusel1.webp",
    alt:"Vision M",
  },
  {
    id:2,
    src:"/carrusel/Carrusel4.webp",
    alt:"Vision M Dark",
  },
  {
    id:3,
    src:"/carrusel/Hero4.webp",
    alt:"Vision M Dark",
  },
  {
    id:4,
    src:"/carrusel/Carrusel6.webp",
    alt:"Vision M Dark"
  },
];
  return(
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-white">
      <main className="relative flex min-h-[calc(100vh-4rem)] overflow-hidden">

{/* Background Image */}
        <Image src="/hero/Hero1.webp" alt="Pintura electrostática Vision M" fill priority className="object-cover"/>

{/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

{/* Hero Content */}
        <section className="relative z-10 container mx-auto flex items-center justify-center px-4 py-32 min-h-screen">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-7xl mb-10 font-black tracking-wide">Vision M</h1>
            <h2 className="mt-6 mb-25 text-2xl font-semibold">Acabados que protegen. Calidad que permanece.</h2>

            <Link href="/cotizaciones">
              <Button className="hover:bg-[#FFBF00] border border-solid border-[#FFBF00] hover:text-black bg-white text-black transition-all duration-300 hover:scale-105">
                Cotiza con nosotros
              </Button>
            </Link>
          </div>
        </section>

    </main>
{/*¿Que es la pintura electrostatica?*/}      
      <section className="flex-1 border border-solid border-black">
        <h2>¿Qué es la pintura electrostática?</h2>
        <p>limpieza</p>
        <p>Aplicacion electrostática</p>
        <p>Curado en horno</p>
        <p>Entrega</p>
        <p>Un proceso que ofrece mayor resistencia, mejor adherencia y acabados uniformes para proteger tus piezas</p>
      </section>
{/*Trabajos realizados*/}
      <section className="flex-1 flex border border-solid border-black justify-between">
        <div className="flex flex-1/5 flex-col  items-center justify-center">
          <h2>Algunos de nuestros proyectos</h2>
          <Link href='/servicios'>
          <Button variant="ghost" className="bg-black text-white hover:bg-[#FFBF00]">Ver más proyectos</Button>
        </Link>
        </div>
        <div className="flex flex-3/5 w-full h-auto rounded-2xl shadow-2xl">
          <Carousel className="rounded-2xl" opts={{loop: true,}}>
            <CarouselContent>
              {trabajosRealizados.map((project, index) => (
                <CarouselItem key={index}>
                  <div className="flex justify-center items-center h-125 bg-gray-100">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={1600}
                      height={900}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 h-10 w-10 bg-black/20 text-white border-none backdrop-blur-sm transition-all duration-300 hover:bg-[#FFBF00] hover:text-black hover:opacity-100 hover:scale-110"/>
            <CarouselNext className="right-4 h-10 w-10 bg-black/20 text-white border-none backdrop-blur-sm transition-all duration-300 hover:bg-[#FFBF00] hover:text-black hover:opacity-100 hover:scale-110"/>
          </Carousel>
        </div>
      </section>
{/*Acerca de*/}
      <section className="flex-1 border border-solid border-black">
        <h2>Más que pintura, es la confianza en cada proyecto</h2>
        <p>En Visión M trabajamos para ofrecerte la máxima calidad en tus acabados, brindarte atención personalizada y soluciones que se adapten
          a lo que necesitas
        </p>
        <Link href='/acerca'>
          <Button variant="ghost" className="bg-black text-white hover:bg-[#FFBF00]">Conocer más</Button>
        </Link>
      </section>
      <div className="flex gap-6 w-full max-w-4xl">
                <Card className="flex-1  border-gray-200 text-black">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-black">
                            Contacto
                        </CardTitle>
                        <CardDescription className="text-1xl font-bold text-gray-600">
                            En caso de que quieras visitarnos aquí puedes encontrarnos
                        </CardDescription>
                    </CardHeader>
                    <form className="space-y-4">
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label><b>Horarios:</b>Lunes a Viernes de 8:00 am a 5:00pm<br/>Sabado de 8:00 am a 3:00pm</Label>
                            </div>
                            <div className="space-y-2">
                                <Label><b>Telefono:</b>81 3172 4849</Label>
                            </div>
                            <div className="space-y-2">
                                <Label><b>Correo:</b>juande.22@outlook.com</Label>
                            </div>
                            <div className="space-y-2">
                                <Label><b>Redes sociales</b></Label>
                            </div>
                            <div className="space-y-2">
                                <Label><b>Direccion:</b>Patagonia 850, Residencial Santa Fe, Sin Nombre de Col 39, 66477 San Nicolás de los Garza, N.L.</Label>
                            </div>
                        </CardContent>
                    </form>
                </Card>
                <div className="flex-1  border-amber-500">
                    <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.6559084494007!2d-100.20551249511718!3d25.721154592250283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eb555e7fa979%3A0xc832327d80626dcf!2sACEROS%20CASTA%C3%91EDA!5e0!3m2!1ses-419!2smx!4v1785345812780!5m2!1ses-419!2smx" 
                        loading="lazy" referrerPolicy="strict-origin-when-cross-origin">
                    </iframe>
                </div>
            </div>
    </div>
  );
}
