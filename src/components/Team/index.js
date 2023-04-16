import "./styles.css"
import Worker from "../Worker"

const Team =(props) =>{
    //destructuracion
    const {colorPrimary, colorSecundary, title} = props.data
    
    const obj = {
        backgroundColor: colorSecundary
    }
    const styleTitle ={
        borderColor:colorPrimary
    }
    return <section className="team" style={obj}>
        <h3 className="team__title" style={styleTitle} >{title}</h3>
        <div className="team__persons">
            <Worker/>
            <Worker/>
            <Worker/>
            <Worker/>                                                                                                                                                               
        </div>
        
    </section>

}
export default Team