import './styles.css'

const ListOptions = () =>{
    const teams = [ "Programación",
                    "Front End",
                    "Data Science", 
                    "Devops", "UX y Diseño",
                    "Móvil",
                    "Innovación y Gestión"];


    return <div className='listOptions'>
            <label className='listOptions__label'>Equipo</label>
            <select className='listOptions__select'>
                {teams.map((teams, index) => <option  key={index}>{teams}</option>)}
            </select>
        </div>
    }
export default ListOptions;