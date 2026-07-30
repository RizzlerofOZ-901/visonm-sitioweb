import Cotizacion from "@/models/Cotizacion";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(request: Request){
try{
    
    const body = await request.json();

    await connectDB();

    const cotizacion = await Cotizacion.create({
        nombre: body.nombre,
        apellido: body.apellido,
        empresa: body.empresa,
        email: body.email,
        celular: body.celular,
        comentario: body.comentario,
    })

    return NextResponse.json({
        success: true,
        cotizacion,
    })
} catch(error){
    console.error("FULL ERROR:");
    console.error(error);

    return NextResponse.json({
        success: false,
        message: "Error al cargar los datos"
    },
        {status: 500}
    );
}}