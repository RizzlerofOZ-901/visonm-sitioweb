import {Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent,} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Acerca() {
    return (
        <div className="min-h-[calc(100vh-4rem)]">

{/* Section 1: Bienvenida */}
            <section className="bg-gray-100 py-32">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="mt-4">
                        Protegiendo el metal. Asegurando la calidad en cada proyecto
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl">
                        En Visión M nos especializamos en el recubrimiento de pintura electrostática para piezas metálicas usadas en proyectos industriales, comerciales y arquitectónicos. Nos enfocamos en el detalle, tiempos de entrega rápidos y asegurar acabados de alta durabilidad ofreciendo soluciones que protegen cada pieza que los clientes ponen en nuestas manos.
                    </p>

                    <Link href="/cotizaciones">
                        <Button className="mt-10">
                            Cotiza con nosotros
                        </Button>
                    </Link>

                </div>
            </section>

{/* Section 2 */}
            <section className="py-28">
                <div className="container mx-auto max-w-5xl px-6 text-center">

                    <h2 className="mt-4">
                        ¿Quiénes somos?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl">
                        Visión M es una empresa regiomontana dedicada a la pintura electrostática y recubrimientos en polvo para perfiles metálicos con el objetivo de ofrecer acabados duraderos y profesionales mientras creamos lazos con nuestros clientes a través de un servicio que asegure la calidad en el trabajo
                    </p>

                </div>
            </section>

{/* Section 3 */}
            <section className="bg-gray-100 py-28">
                <div className="container mx-auto max-w-7xl px-6">

                    <div className="mb-16 text-center">
                        <h2 className="mt-4">
                            Lo que nos diferencia
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        <Card className="rounded-3xl border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Acabados de Alta Calidad</CardTitle>
                                <CardDescription>
                                    Nuestros procesos mantienen un alto control para lograr un recubrimiento uniforme, de alta resistencia y que muestre una presentación excelente en cada pieza.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="rounded-3xl border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Entregas Confiables</CardTitle>
                                <CardDescription>
                                    Como empresa sabemos lo importante que es el tiempo para nuestros clientes por lo que estamos altamente comprometidos con el cumplimiento de los plazos acordados para mantener nuestras entregas en tiempo y forma.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="rounded-3xl border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Atención Personalizada</CardTitle>
                                <CardDescription>
                                    Sabemos escucharte y adaptarnos a lo que necesites por lo que siempre tendrás una variedad de opciones con la finalidad de resolver tus problemas.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="rounded-3xl border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Protección Continua</CardTitle>
                                <CardDescription>
                                    Nuestros recubrimientos brindan una mayor resistencia al desgaste, corrosión y condiciones adversas prolongando la vida útil de tus piezas.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                    </div>

                </div>
            </section>

{/* Section 4 */}
            <section className="py-28">
                <div className="container mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">

                    <Card className="rounded-3xl border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle>Misión</CardTitle>
                            <CardDescription>
                                Brindar soluciones de pintura electrostática enfocadas en la calidad, precisión y durabilidad ofreciendo un servicio confiable que ayude a nuestros clientes a proteger y mejorar sus productos
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="rounded-3xl border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle>Visión</CardTitle>
                            <CardDescription>
                                Ser una empresa reconocida por la calidad de nuestros acabados, la confianza de nuestros clientes y el compromiso con la mejora continua
                            </CardDescription>
                        </CardHeader>
                    </Card>

                </div>
            </section>

{/* Section 5 */}
            <section className="bg-gray-100 py-28">
                <div className="container mx-auto max-w-7xl px-6">

                    <div className="mb-16 text-center">

                        <span>Nuestros valores</span>

                        <h2 className="mt-4">
                            Valores
                        </h2>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        <Card className="rounded-3xl border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Calidad</CardTitle>
                                <CardDescription>
                                    Cada acabado refleja nuestro compromiso con hacer bien las cosas.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="rounded-3xl border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Responsabilidad</CardTitle>
                                <CardDescription>
                                    Cumplimos con lo que prometemos y respetamos los tiempos acordados.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="rounded-3xl border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Integridad</CardTitle>
                                <CardDescription>
                                    Trabajamos con honestidad y somos transparentes.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="rounded-3xl border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle>Compromiso</CardTitle>
                                <CardDescription>
                                    Cada proyecto recibe la misma atención
                                </CardDescription>
                            </CardHeader>
                        </Card>

                    </div>

                </div>
            </section>

{/* CTA */}
            <section className="py-32">
                <div className="container mx-auto max-w-4xl px-6 text-center">

                    <span>Contáctanos</span>

                    <h2 className="mt-4">
                        ¿Listo para comenzar con tu próximo proyecto?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl">
                        En Visión M estamos listos para ofrecerte para mejor solución de recubrimiento. Solicita tu cotización personalizada y trabajemos en tu próxima idea.
                    </p>

                    <Link href="/cotizaciones">
                        <Button variant="ghost" className="bg-black text-white hover:bg-[#FFBF00] mt-10">
                            Cotiza con nosotros
                        </Button>
                    </Link>

                </div>
            </section>

        </div>
    );
}