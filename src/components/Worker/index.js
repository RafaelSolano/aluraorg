import "./styles.css"
import {AiFillCloseCircle } from "react-icons/ai"
const Worker =(props) =>{
    const {personName, personPuesto, personFoto, id} = props.data
    const {colorPrimary, deleteWorker } =props
    return <div className='worker'>
        <div className="worker__header" style={{ backgroundColor:colorPrimary}}>
        <AiFillCloseCircle className="worker__eliminarbtn" onClick={ () => deleteWorker(id)}/>
            <img className="worker__img" src= {personFoto}alt={personName}/>
        </div>
        <div className="worker__info">
            <h3 className="worker__name">{personName}</h3>
            <h4 className="worker__grade">{personPuesto}</h4>
        </div>
    </div>

}
export default Worker