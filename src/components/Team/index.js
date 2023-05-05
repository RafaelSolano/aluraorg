import "./styles.css"
import Worker from "../Worker"

const Team =(props) =>{
    //destructuracion
    const {colorPrimary, colorSecundary, title } = props.data
    const {workers, deleteWorker,updateColor} = props  
    const obj = {
        backgroundColor: colorSecundary
    }

    console.log();
    const styleTitle ={
        borderColor:colorPrimary
    }
    return <>{  workers.length > 0 &&
        <section className="team" style={obj}>
            <input
                type="color"
                className="team__input--color"
                value={colorSecundary}
                onChange={(evento) =>{
                    updateColor(evento.target.value, title);

                }}
            ></input>
        <h3 className="team__title" style={styleTitle} >{title}</h3>
        <div className="team__persons">
            
            {
                workers.map((worker)=> <Worker 
                data ={worker} 
                key ={worker.index} 
                colorPrimary ={colorPrimary}
                deleteWorker = {deleteWorker}
                />)
            }                                                                                                                                                                         
        </div>
        
    </section>
        }</>
}
export default Team