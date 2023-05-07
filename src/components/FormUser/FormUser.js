import { useState } from "react";
import "./FormUser.css"
import FieldForm from "../FieldInput";
import ListOptions from "../ListOptions";
import Button from "../Button";
const FormUser = (props) =>{
    const [personName , actualizarName] = useState("");
    const [personPuesto , actualizarPuesto] = useState("");
    const [personFoto , actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [title, actualizartitle] = useState("");
    const [color, actualizarcolor] = useState("");

    const {addWorker , createTeam}=props;
    

    const controlSubmit =(e) =>{
        e.preventDefault()
        console.log("Manejar envio");
        let datosEnviar = {
            personName,
            personPuesto ,
            personFoto,
            equipo
            
        }
        addWorker(datosEnviar);
    }

    //Manejar nuevo equipo
    const adminNewTeam = (e)=>{

        e.preventDefault()
        createTeam({title, colorPrimary: color});

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
        <form onSubmit={adminNewTeam}  className="formUser__form">
            <h2 className="formUser__title">Rellena el formulario para crear el equipo</h2>
            <FieldForm 
                title ='Titulo: ' 
                placeholder="Ingresar Titulo" 
                required valor= {title} 
                actualizarValor = {actualizartitle}/>
            <FieldForm title ='Color: ' 
                placeholder="Ingresar color en Hexadecimal" 
                required valor ={color} 
                actualizarValor = {actualizarcolor} />
                <Button>
                Registrar equipo
            </Button>
        </form>
    </section>
}

export default FormUser;
