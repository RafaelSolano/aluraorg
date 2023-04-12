import "./FieldForm.css"
const FieldForm = (props) =>{
    console.log("props: ", props);
    const placeholderTemplate = `${props.placeholder}...`
    return <div className="fieldForm"> 
    <label className="fieldForm__label"  >{props.title} </label>
    <input className="fieldForm__input" type="text"  name="fieldText" placeholder={placeholderTemplate}></input>


    </div>
}
export default FieldForm;