
import { useState } from "react";
import "./FieldForm.css"
const FieldForm = (props) =>{

    const [valor,actualizarValor] = useState("");
    const placeholderTemplate = `${props.placeholder}...`

    const manejarCambios = (e) =>{
        props.actualizarValor(e.target.value)
    }
    return <div className="fieldForm"> 
    <label  className="fieldForm__label"  >{props.title} </label>
    <input  className="fieldForm__input" 
            type="text"  
            name="fieldText" 
            placeholder={placeholderTemplate} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambios}            
            ></input>


    </div>
}
export default FieldForm;