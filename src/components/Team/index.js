import "./styles.css"
import Worker from "../Worker"
import hexToRgba from 'hex-to-rgba';

const Team =(props) =>{
    //destructuracion
    const {colorPrimary, colorSecundary, title, id } = props.data
    const {workers, deleteWorker, updateColor} = props  
    const obj = {
        backgroundColor: hexToRgba(colorPrimary, 0.3)
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
                value={colorPrimary}
                onChange={(evento) =>{
                    updateColor(evento.target.value, id);

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