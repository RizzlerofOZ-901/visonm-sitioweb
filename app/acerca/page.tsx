import {Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent,} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function acerca(){
    return(
        <div className="min-h-[calc(100vh-4rem)]">
            <span>Acerca de</span>
{/* Section 1: Bienvenida*/}
            <section className="border border-solid border-black">
                <h2>Protegiendo el metal. Asegurando la calidad en cada proyecto</h2>
                    <p>
                        En Visión M nos especializamos en el recubrimiento de pintura electrotática para piezas metálicas usadas en proyectos industriales, comerciales y 
                        arquitectonicos. Nos enfocamos en el detalle, tiempos de entrega rápidos y asegurar acabados de alta durabilidad ofreciendo
                        soluciones que protegen cada pieza que los clientes ponen en nuestas manos.
                    </p>
                    <Link href='/cotizaciones'>
                        <Button variant="ghost" className="bg-black text-white hover:bg-[#FFBF00]">Cotiza con nosotros</Button>
                    </Link>
            </section>
{/* Section 2: ¿Quienes somos?*/}
            <section className="border border-solid border-black">
                <h2>¿Quiénes somos?</h2>
                    <p>
                        Visión M es una empresa regiomontana dedicada a la pintura electróstatica y recubrimientos en polvo para perfiles metálicos
                        con el objetivo de poner en manos de ofrecer acabados duraderos y profesionales mientras creamos lazos con nuestros clientes
                        a través de un servicio que asegure la calidad en el trabajo 
                    </p>
            </section>
{/* Section 3: ¿Por qué elegirnos? Cartas*/}
            <section className="border border-solid border-black">
                <h2>¿Por qué elegirnos?</h2>
                <div className="flex">
                    <Card className="flex-1 border border-solid border-black">
                        <CardHeader>
                            <CardTitle>Acabados de Alta Calidad</CardTitle>
                            <CardDescription>
                                Nuestros procesos mantienen un alto control para lograr un recubrimiento uniforme, de alta resistencia y que
                                muestre una presentación excelente en cada pieza.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="flex-1 border border-solid border-black">
                        <CardHeader>
                            <CardTitle>Entregas Confiables</CardTitle>
                            <CardDescription>
                                Como empresa sabemos lo importante que es el tiempo para nuestros clientes por lo que estamos altamente comprometidos
                                con el cumplimiento de los plazos acordados para mantener nuestras entregas en tiempo y forma.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="flex-1 border border-solid border-black">
                        <CardHeader>
                            <CardTitle>Atención Personalizada</CardTitle>
                            <CardDescription>
                                Sabemos escucharte y adaptarnos a lo que necesites por lo que siempre tendrás una variedad de opciones con
                                la finalidad de resolver tus problemas.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="flex-1 border border-solid border-black">
                        <CardHeader>
                            <CardTitle>Protección Continua</CardTitle>
                            <CardDescription>
                                Nuestros recubrimientos brindan una mayor resistencia al desgaste, corrosión y condiciones adversas prolongando
                                la vida útil de tus piezas.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </section>
{/* Section 3: Cartas*/}
            <section className="border border-solid border-black">
                <h2>Misión</h2>
                    <p>
                        Brindar soluciones de pintura electrostática enfocadas en la calidad, precisión y durabilidad ofreciendo un servicio
                        confiable que ayude a nuestros clientes a proteger y mejorar sus productos 
                    </p>
            </section>
            <section className="border border-solid border-black">
                <h2>Visión</h2>
                    <p>
                        Ser una empresa reconocida por la calidad de nuestros acabados, la confianza de nuestros clientes y el compromiso con la mejora continua
                    </p>
            </section>
            <section className="border border-solid border-black">
                <h2>Valores</h2>
                    <p><b>Calidad</b><br />Cada acabado refleja nuestro compromiso con hacer bien las cosas.</p>
                    <p><b>Responsabilidad</b><br />Cumplimos con lo que prometemos y respetamos los tiempos acordados.</p>
                    <p><b>Integridad</b><br />Trabajamos con honestidad y somos transparentes.</p>
                    <p><b>Compromismo</b><br />Cada proyecto recibe la misma atención</p>
            </section>
            <section className="border border-solid border-black">
                <h2>¿Listo para comenzar con tu próximo proyecto?</h2>
                    <p>
                        En Visión M estamos listos para ofrecerte para mejor solución de recubrimiento. Solicita tu cotización personalizada y trabajemos en tu
                        próxima idea.
                    </p>
                    <Link href='/cotizaciones'>
                        <Button variant="ghost" className="bg-black text-white hover:bg-[#FFBF00]">Cotiza con nosotros</Button>
                    </Link>
            </section>
        </div>
    );
}