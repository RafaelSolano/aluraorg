import "./styles.css"
const Worker =(props) =>{
    const {personName, personPuesto, personFoto} = props.data
    const {colorPrimary} =props
    return <div className='worker'>
        <div className="worker__header" style={{ backgroundColor:colorPrimary}}>
            <img className="worker__img" src= {personFoto}alt={personName}/>
        </div>
        <div className="worker__info">
            <h3 className="worker__name">{personName}</h3>
            <h4 className="worker__grade">{personPuesto}</h4>
        </div>
    </div>

}
export default Worker