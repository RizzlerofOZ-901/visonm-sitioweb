import mongoose, {Schema, models} from "mongoose";

const CotizacionSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    empresa: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    celular: {
        type: String,
        required: true,
    },
    comentario: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const Cotizacion = models.Cotizacion || mongoose.model("Cotizacion",CotizacionSchema);

export default Cotizacion;
