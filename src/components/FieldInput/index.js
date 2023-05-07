/* eslint-disable react/jsx-no-duplicate-props */

import { useState } from "react";
import "./FieldForm.css"
const FieldForm = (props) =>{

    const [valor,actualizarValor] = useState("");
    const placeholderTemplate = `${props.placeholder}...`

    //destructuraccion
    const { type ="text"  } = props
    const manejarCambios = (e) =>{
        props.actualizarValor(e.target.value)
    }
    return <div className= {`fieldForm formUser__title--${type}`}> 
    <label  className="fieldForm__label"  >{props.title} </label>
    <input  className= "fieldForm__input" 
            name="fieldText" 
            placeholder={placeholderTemplate} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambios}  
            type = {type}
            
            

            ></input>


    </div>
}
export default FieldForm;