import "./FormUser.css"
import FieldForm from "../FieldInput";
import ListOptions from "../ListOptions";
const FormUser = () =>{
    return <section className="formUser">
        <form className="formUser__form">
            <h2 className="formUser__title">Rellena el formulario para agregar el colaborador</h2>
            <FieldForm title ='Nombre: ' placeholder="Ingresar Nombre"/>
            <FieldForm title ='Puesto: ' placeholder="Ingresar Puesto"/>
            <FieldForm title ='Foto:'placeholder="Ingresar enlace de Foto" />
            <ListOptions />
            
        </form>
    </section>
}

export default FormUser;
