import "./FormUser.css"
import FieldForm from "../FieldInput";
import ListOptions from "../ListOptions";
import Button from "../Button";
const FormUser = () =>{

    const controlSubmit =(e) =>{
        e.preventDefault()
        console.log('Envio btn', e) 
    }

    return <section className="formUser">
        <form onSubmit={controlSubmit}  className="formUser__form">
            <h2 className="formUser__title">Rellena el formulario para agregar el colaborador</h2>
            <FieldForm title ='Nombre: ' placeholder="Ingresar Nombre" required />
            <FieldForm title ='Puesto: ' placeholder="Ingresar Puesto" required/>
            <FieldForm title ='Foto:'placeholder="Ingresar enlace de Foto" required/>
            <ListOptions />
            <Button>
                Crear
            </Button>
            
        </form>
    </section>
}

export default FormUser;
