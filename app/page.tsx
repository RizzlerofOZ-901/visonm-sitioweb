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
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-white ">
      <main className="relative flex min-h-[calc(100vh-4rem)] overflow-hidden">

{/* Background Image */}
        <Image src="/hero/Hero1.webp" alt="Pintura electrostática Vision M" fill priority className="object-cover"/>

{/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

{/* Hero Content */}
        <section className="relative z-10 container mx-auto flex items-center justify-center px-4 py-28 min-h-screen">
          <div className="text-center text-white container mx-auto max-w-7xl px-6">
            <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight">Vision M</h1>
            <p className="mx-auto max-w-2xl text-xl md:text-2xl leading-relaxed text-white/90">Acabados que protegen. Calidad que permanece.</p>

            <Link href="/cotizaciones">
              <Button className="hover:bg-[#FFBF00] border border-solid border-[#FFBF00] hover:text-black bg-white text-black transition-all duration-300 hover:scale-105">
                Cotiza con nosotros
              </Button>
            </Link>
          </div>
        </section>

    </main>
{/* ¿Qué es la pintura electrostática? */}
<section className="bg-gray-100 py-18">
  <div className="container mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
{/* Left */}
    <div>
      <span className="font-semibold uppercase tracking-[0.2em] text-[#FFBF00]">
        Nuestro proceso
      </span>
      <h2 className="mt-4">
        ¿Qué es la pintura electrostática?
      </h2>
      <p className="mt-6 max-w-lg">
        La pintura electrostática es un proceso donde se realizan acabados
        uniformes de alta resistencia y protección contra el
        desgaste y la corrosión.
      </p>

      <div className="mt-10 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBF00]" />
          <span className="text-gray-700">Limpieza de la superficie</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBF00]" />
          <span className="text-gray-700">Aplicación electrostática</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBF00]" />
          <span className="text-gray-700">Curado en horno</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBF00]" />
          <span className="text-gray-700">Inspección y entrega</span>
        </div>
      </div>
    </div>

    {/* Right */}
    <div className="relative h-50 overflow-hidden rounded-2xl shadow-xl lg:h-100">
      <Image
        src="/hero/Hero4.webp"
        alt="Proceso de pintura electrostática"
        fill
        className="object-cover"
      />
    </div>

  </div>
</section>
{/*Trabajos realizados*/}
      <section className="flex-1 flex bg-gray-100 justify-between px-10 py-8">
        <div className="flex flex-1/5 flex-col  justify-center gap-6">
          <h2>Algunos de nuestros proyectos</h2>
          <p className="max-w-md">Comprometidos con la calidad, precisión y durabilidad en nuestros acabados</p>
          <Link href='/servicios'>
          <Button variant="ghost" className="bg-black text-white hover:bg-[#FFBF00]">Ver más proyectos</Button>
        </Link>
        </div>
        <div className="flex flex-3/5 w-full h-auto rounded-3xl overflow-hidden shadow-2xl">
          <Carousel opts={{loop: true,}}>
            <CarouselContent>
              {trabajosRealizados.map((project, index) => (
                <CarouselItem key={index} >
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
      <section className="flex flex-col bg-white py-32 ">
        <div className="container mx-auto max-w-4xl px-6 text-center gap-5">
          <span className="font-semibold uppercase tracking-[0.2em] text-[#FFBF00]">
            Sobre nosotros
          </span>
          <h2 className="m-4 ">Más que pintura, es la confianza en cada proyecto</h2>
          <p className="mb-10 mx-auto mt-6 max-w-2xl">En Visión M trabajamos para ofrecerte la máxima calidad en tus acabados, brindarte atención personalizada y soluciones que se adapten
            a lo que necesitas
          </p >
          <Link href='/acerca'>
            <Button variant="ghost" className="bg-black text-white hover:bg-[#FFBF00]">Conocer más</Button>
          </Link>
        </div>
      </section>
{/*Contacto | Cotizaciones*/}
    <section>
      <div className="container mx-auto max-w-7xl px-6 flex pb-20">
        <div className="mx-auto flex max-w-5xl gap-8">
            <Card className="flex-1 rounded-2xl bg-gray-50">
                    <CardHeader className="space-y-1">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFBF00]">Contacto</span>
                        <CardTitle className="text-2xl font-bold">
                            Estamos para ayudarte
                        </CardTitle>
                        <CardDescription>
                          ¿Quieres una cotización o visitar nuestras instalaciones? <br/>Aquí podrás encontrar información de contacto. 
                        </CardDescription>
                    </CardHeader>
                    <form className="space-y-6">
                        <CardContent className="space-y-4">
                          <div>
                              <CardDescription className="text-sm font-semibold uppercase tracking-wide text-[#FFBF00]">Horarios</CardDescription>
                              <CardDescription className="mt-1">Lunes a Viernes: 8:00 am – 5:00 pm<br />Sábado: 8:00 am – 3:00 pm</CardDescription>
                          </div>
                          <div>
                              <CardDescription className="text-sm font-semibold uppercase tracking-wide text-[#FFBF00]">Telefono</CardDescription>
                              <CardDescription className="mt-1">81 3172 4849</CardDescription>
                          </div>          
                          <div>
                              <CardDescription className="text-sm font-semibold uppercase tracking-wide text-[#FFBF00]">Correo</CardDescription>
                              <CardDescription className="mt-1">juande.22@outlook.com</CardDescription>
                          </div>
                          <div>
                          <p className="text-sm font-semibold uppercase tracking-wide text-[#FFBF00]">
                            Redes sociales
                          </p>
                              <div className="mt-3 flex gap-4">
                                  <Link href="https://www.facebook.com/visionm.com.mx">
                                      <Image
                                          src="/redes/facebook.png"
                                          alt="Facebook"
                                          width={28}
                                          height={28}
                                          className="transition-transform duration-300 hover:scale-110"
                                      />
                                  </Link>
                                  <Link href="https://wa.me/528131724849">
                                      <Image
                                          src="/redes/Whatsapp.png"
                                          alt="WhatsApp"
                                          width={28}
                                          height={28}
                                          className="transition-transform duration-300 hover:scale-110"
                                      />
                                  </Link>
                              </div>
                          </div>

                          <div>
                          <div>
                              <CardDescription className="text-sm font-semibold uppercase tracking-wide text-[#FFBF00]">Dirección</CardDescription>
                              <CardDescription className="mt-1">Patagonia 850, Residencial Santa Fe, San Nicolás de los Garza, N.L.</CardDescription>
                          </div>
                          </div>
                        </CardContent>
                    </form>
                </Card>
                <div className="flex-1 overflow-hidden rounded-3xl shadow-xl">
                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.6559084494007!2d-100.20551249511718!3d25.721154592250283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662eb555e7fa979%3A0xc832327d80626dcf!2sACEROS%20CASTA%C3%91EDA!5e0!3m2!1ses-419!2smx!4v1785345812780!5m2!1ses-419!2smx" 
                        loading="lazy" referrerPolicy="strict-origin-when-cross-origin">
                    </iframe>
                </div>
        </div>
      </div>
    </section>
    </div>
  );
}
