import "./FieldForm.css"
const FieldForm = (props) =>{
    const placeholderTemplate = `${props.placeholder}...`
    return <div className="fieldForm"> 
    <label className="fieldForm__label"  >{props.title} </label>
    <input className="fieldForm__input" type="text"  name="fieldText" placeholder={placeholderTemplate} required={props.required}></input>


    </div>
}
export default FieldForm;