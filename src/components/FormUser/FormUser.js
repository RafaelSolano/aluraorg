import "./FormUser.css"
import FieldForm from "../FieldInput";

const FormUser = () =>{
    return <section className="formUser">
        <form className="formUser__form">
            <h2 className="formUser__title">Rellena el formulario para agregar el colaborador</h2>
            <FieldForm/>
            <FieldForm/>
            <FieldForm/>
            <FieldForm/>
        </form>
    </section>
}

export default FormUser;
