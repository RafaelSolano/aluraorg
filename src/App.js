import { useState } from 'react';
import { v4  as uuid } from  'uuid';
import './App.css';
import Header  from './components/Header/Header';
import FormUser from './components/FormUser/FormUser';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() { 

  const [showForm, updateShow] = useState(false)
  //lista de colaboradores
  const [workers, updateWorker] = useState([
    {
    id: uuid(),  
    equipo:'Programación',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Instructor'
  },
  {
    id: uuid(),
    equipo:'Programación',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    id: uuid(),
    equipo:'Programación',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    id: uuid(),
    equipo:'Programación',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  
  
  {
    id: uuid(),
    equipo:'Data Science',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    id: uuid(),
    equipo:'Devops',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    id: uuid(),
    equipo:'Data Science',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  {
    id: uuid(),
    equipo:'Devops',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Frontend'
  },
  {
    id: uuid(),
    equipo:'Devops ',
    personName:'Jose Gonzalez',
    personFoto:'https://github.com/JoseDarioGonzalezCha.png',
    personPuesto:'Dev. FullStack'
  },
  {
    id: uuid(),
    equipo:'Data Science',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    id: uuid(),
    equipo:'Devops',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  {
    id: uuid(),
    equipo:'Devops',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    id: uuid(),
    equipo:'Data Science',
    personName:'Jose Gonzalez',
    personFoto:'https://github.com/JoseDarioGonzalezCha.png',
    personPuesto:'Dev. FullStack'
  },
  {
    id: uuid(),
    equipo:'UX y Diseño',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Frontend'
  },

  {
    id: uuid(),
    equipo:'UX y Diseño',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  
  
  {
    id: uuid(),
    equipo:'UX y Diseño',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    id: uuid(),
    equipo:'UX y Diseño',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    id: uuid(),
    equipo:'Móvil',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Instructor'
  },
  {
    id: uuid(),
    equipo:'Móvil',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    id: uuid(),
    equipo:'Móvil',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    id: uuid(),
    equipo:'Móvil',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  
  {
    id: uuid(),
    equipo:'Innovación y Gestión',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Frontend'
  },
  {
    id: uuid(),
    equipo:'Innovación y Gestión',
    personName:'Jose Gonzalez',
    personFoto:'https://github.com/JoseDarioGonzalezCha.png',
    personPuesto:'Dev. FullStack'
  },
  {
    id: uuid(),
    equipo:'Innovación y Gestión',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  {
    id: uuid(),
    equipo:'Innovación y Gestión',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  }
  ]);
   //lista de equipos
  const [teams , updateTeams ] = useState([ 
    {
      id: uuid(),
      title: "Programación",
      colorPrimary: '#57C278',
      colorSecundary:'#D9F7E9'     
    },
    {
      id: uuid(),
      title: "Front End",
      colorPrimary: '#82CFFA'  ,
      colorSecundary:'#E8F8FF'     
    },
    {
      id: uuid(),
      title: "Data Science",
      colorPrimary: '#A6D157'  ,
      colorSecundary:'#F0F8E2'     
    },
    {
      id: uuid(),
      title: "Devops",
      colorPrimary: '#E06B69'  ,
      colorSecundary:'#FDE7E8'     
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      colorPrimary: '#DB6EBF'  ,
      colorSecundary:'#FAE9F5'     
    },
    {
      id: uuid(),
      title: "Móvil",
      colorPrimary: '#FFBA05'  ,
      colorSecundary:'#FFF5D9'     
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      colorPrimary: '#FF8A29'  ,
      colorSecundary:'#FFEEDF'     
    }
    
  ])
  
  const switchShow = () =>{
    updateShow(!showForm)
  }
  //Registrar colaborador
  const addWorker = (worker ) =>{
    console.log("nuevo  Worker " , worker);
    //spread operator
    updateWorker([...workers, worker])
  }
  //eliminar colaborador
  const deleteWorker =(id) =>{
    console.log("eliminar Colaborador", id);
    const newWorkers = workers.filter((worker) => worker.id !== id)
    updateWorker(newWorkers)  
  }
  //Actualizar el color del equipo
  const updateColor =(color, id)=>{
    console.log("Actualizar: ", color, id  );
    const teamsUpdate = teams.map((team)=>{
      if(team.id === id){
        team.colorPrimary = color
      }
      return team
    })
    updateTeams(teamsUpdate)
    }
    
  return (
    <div className="App">
      <Header/>
      
      {showForm  && <FormUser 
        teams ={teams.map((equipo) => equipo.title)}
        addWorker ={addWorker}
        />
      }
      <MyOrg switchShow ={switchShow}/>
      {
        teams.map((team)=> <Team
          data = {team} 
          key ={team.title}
          workers ={workers.filter(worker => worker.equipo === team.title)}
          deleteWorker = {deleteWorker}
          updateColor ={updateColor}
          
          />
        )
      }
      <Footer/>
        
    </div>
  );
}

export default App;
