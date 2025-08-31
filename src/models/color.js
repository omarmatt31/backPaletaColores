import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    codigoColor: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 7,
        unique: true,
        validate: {
            validator: (valor) =>{
                return /^#([A-Fa-f0-9]{6})$/.test(valor);
            },
            message: props => `${props.value} no es un código de color hexadecimal válido!`
        }
    }
});

const Color = mongoose.model("color", colorSchema);

export default Color