import "./styles.css"

import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
const Worker =(props) =>{
    const {personName, personPuesto, personFoto, id, fav} = props.data
    const {colorPrimary, deleteWorker, like } =props
    return <div className='worker'>
        <div className="worker__header" style={{ backgroundColor:colorPrimary}}>
        <AiFillCloseCircle className="worker__eliminarbtn" onClick={ () => deleteWorker(id)}/>
            <img className="worker__img" src= {personFoto}alt={personName}/>
        </div>
        <div className="worker__info">
            <h3 className="worker__name">{personName}</h3>
            <h4 className="worker__grade">{personPuesto}</h4>
            <span className="worker_fav">
                {fav ?<AiFillHeart color="red" onClick={()=> like(id)}/> : <AiOutlineHeart onClick={()=> like(id)}/> }
            </span>
            
            
            
        </div>
    </div>

}
export default Worker