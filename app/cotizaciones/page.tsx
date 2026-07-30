"use client";
import {Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent,} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import React from "react";

export default function Cotizaciones(){
        const[nombre, setNombre] = useState("");
        const[apellido, setApellido] = useState("");
        const[empresa, setEmpresa] = useState("");
        const[email, setEmail] = useState("");
        const[celular, setCelular] = useState("");
        const[comentario, setComentario] = useState("");

        const [error, setError] = useState("");
        const [loading, setLoading] = useState(false);

        async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
            e.preventDefault();
            setError("");
            setLoading(true);

            try{
                const response = await fetch("/api/cotizaciones",{
                 method: "POST",
                 headers:{
                    "Content-Type": "application/json",
                 },
                 body: JSON.stringify({
                    nombre, 
                    apellido,
                    empresa,
                    email,
                    celular,
                    comentario
                 }),   
                });
                const data = await response.json();
                console.log(data);
            } catch (err){
                setError("Un error inesperado ha ocurrido")
            } finally{
                setLoading(false);
            }
        }

    return(
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-white p-4 gap-8">
            <span>Cotizaciones</span>
{/*Tarjeta para cotizaciones*/}
            <Card className="w-full max-w-4xl border-gray-200 text-black">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-black">
                        Cotizaciones
                    </CardTitle>
                    <CardDescription className="text-xl font-bold text-gray-600">
                        Rellena los siguientes campos y te contactaremos 
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Nombre</Label>
                            <Input 
                            id="nombre" type="text" placeholder="Juan" required
                            value={nombre} onChange={(e) =>setNombre(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Apellido</Label>
                            <Input 
                            id="apellido" type="text" placeholder="Querendon" required
                            value={apellido} onChange={(e) =>setApellido(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Empresa</Label>
                            <Input 
                            id="empresa" type="text" placeholder="Empresa de Juan"
                            value={empresa} onChange={(e) =>setEmpresa(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Correo</Label>
                            <Input 
                            id="correo" type="email" placeholder="JuanQuerendon@email.com" required
                            value={email} onChange={(e) =>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Celular</Label>
                            <Input 
                            id="celular" type="tel" placeholder="1234567890" pattern="[0-9]{10}" maxLength={10} required
                            value={celular} onChange={(e) =>setCelular(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Comentario</Label>
                            <Input 
                            id="comentario" type="text" placeholder="Aquí puedes detallar información sobre las piezas que quieras pintar. Por ejemplo: Cantidad, tamaño, urgencia, etc"
                            value={comentario} onChange={(e) =>setComentario(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">Enviar</Button>
                    </CardFooter>
                </form>
            </Card>      
{/*Tarjeta para informacion de contacto*/}
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
                        loading="eager" referrerPolicy="strict-origin-when-cross-origin">
                    </iframe>
                </div>
            </div>
            
        </div>
    );
}