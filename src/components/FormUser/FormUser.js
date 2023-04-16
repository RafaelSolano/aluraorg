import { useState } from "react";
import "./FormUser.css"
import FieldForm from "../FieldInput";
import ListOptions from "../ListOptions";
import Button from "../Button";
const FormUser = (props) =>{
    const [personName , actualizarName] = useState("")
    const [personPuesto , actualizarPuesto] = useState("")
    const [personFoto , actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const controlSubmit =(e) =>{
        e.preventDefault()
        console.log("Manejar envio");
        let datosEnviar = {
            personName,
            personPuesto ,
            personFoto,
            equipo
            
        }
        console.log(datosEnviar);
    }

    return <section className="formUser">
        <form onSubmit={controlSubmit}  className="formUser__form">
            <h2 className="formUser__title">Rellena el formulario para agregar el colaborador</h2>
            <FieldForm 
                title ='Nombre: ' 
                placeholder="Ingresar Nombre" 
                required valor= {personName} 
                actualizarValor = {actualizarName}/>
            <FieldForm title ='Puesto: ' 
                placeholder="Ingresar Puesto" 
                required valor ={personPuesto} 
                actualizarValor = {actualizarPuesto} />
            <FieldForm 
                title ='Foto:'
                placeholder="Ingresar enlace de Foto" 
                required valor ={personFoto} 
                actualizarValor = {actualizarFoto} />
            <ListOptions 
                valor ={equipo} 
                actualizarValor={actualizarEquipo}
                equipos ={props.teams}/>
            <Button>
                Crear
            </Button>
            
        </form>
    </section>
}

export default FormUser;
