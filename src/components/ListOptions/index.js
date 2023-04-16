import './styles.css'

const ListOptions = (props) =>{
    
    
    const manejarCambio=(e)=>{
        console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value);
    }


    return <div className='listOptions'>
            <label className='listOptions__label'>Equipo</label>
            <select 
                className='listOptions__select' 
                value={props.valor}
                onChange={manejarCambio}
                ><option 
                    value={""} 
                    disabled defaultValue={""} 
                    hidden
                    >Seleccionar Equipo</option>
                {props.equipos.map((team, index) => <option  key={index} value ={team}>{team} </option>)}
            </select>
        </div>
    }
export default ListOptions;