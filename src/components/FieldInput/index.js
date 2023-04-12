import "./FieldForm.css"
const FieldForm = () =>{
    return <div className="fieldForm"> 
    <label className="fieldForm__label"  >Nombre: </label>
    <input className="fieldForm__input" type="text"  name="fieldText" placeholder="Ingresar Nombre"></input>


    </div>
}
export default FieldForm;