import { useState } from 'react';
import './App.css';
import Header  from './components/Header/Header';
import FormUser from './components/FormUser/FormUser';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [showForm, updateShow] = useState(false)
  const [workers, updateWorker] = useState([
    {
    equipo:'Programación',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Instructor'
  },
  {
    equipo:'Programación',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    equipo:'Programación',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    equipo:'Programación',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  
  
  {
    equipo:'Data Science',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    equipo:'Devops',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    equipo:'Data Science',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  {
    equipo:'Devops',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Frontend'
  },
  {
    equipo:'Devops ',
    personName:'Jose Gonzalez',
    personFoto:'https://github.com/JoseDarioGonzalezCha.png',
    personPuesto:'Dev. FullStack'
  },
  {
    equipo:'Data Science',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    equipo:'Devops',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  {
    equipo:'Devops',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    equipo:'Data Science',
    personName:'Jose Gonzalez',
    personFoto:'https://github.com/JoseDarioGonzalezCha.png',
    personPuesto:'Dev. FullStack'
  },
  {
    equipo:'UX y Diseño',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Frontend'
  },

  {
    equipo:'UX y Diseño',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  
  
  {
    equipo:'UX y Diseño',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    equipo:'UX y Diseño',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    equipo:'Móvil',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Instructor'
  },
  {
    equipo:'Móvil',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  },
  {
    equipo:'Móvil',
    personName:'Jeanmarie Quijada',
    personFoto:'https://github.com/JeanmarieAluraLatam.png',
    personPuesto:'Instructora en Alura Latam'
  },
  {
    equipo:'Móvil',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  
  {
    equipo:'Innovación y Gestión',
    personName:'Harland',
    personFoto:'https://github.com/harlandlohora.png',
    personPuesto:'Frontend'
  },
  {
    equipo:'Innovación y Gestión',
    personName:'Jose Gonzalez',
    personFoto:'https://github.com/JoseDarioGonzalezCha.png',
    personPuesto:'Dev. FullStack'
  },
  {
    equipo:'Innovación y Gestión',
    personName:'Christian Velasco',
    personFoto:'https://github.com/christianpva.png',
    personPuesto:'Head de Alura e instructor'
  },
  {
    equipo:'Innovación y Gestión',
    personName:'Genesys Rondón',
    personFoto:'https://github.com/genesysaluralatam.png',
    personPuesto:'Desarrolladora de software e instructora'
  }
  ]);
  

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
  const deleteWorker =() =>{
    console.log("eliminar Colaborador");
  }

  //lista de equipos
  const teams = [ 
    {
      title: "Programación",
      colorPrimary: '#57C278',
      colorSecundary:'#D9F7E9'     
    },
    {
      title: "Front End",
      colorPrimary: '#82CFFA'  ,
      colorSecundary:'#E8F8FF'     
    },
    {
      title: "Data Science",
      colorPrimary: '#A6D157'  ,
      colorSecundary:'#F0F8E2'     
    },
    {
      title: "Devops",
      colorPrimary: '#E06B69'  ,
      colorSecundary:'#FDE7E8'     
    },
    {
      title: "UX y Diseño",
      colorPrimary: '#DB6EBF'  ,
      colorSecundary:'#FAE9F5'     
    },
    {
      title: "Móvil",
      colorPrimary: '#FFBA05'  ,
      colorSecundary:'#FFF5D9'     
    },
    {
      title: "Innovación y Gestión",
      colorPrimary: '#FF8A29'  ,
      colorSecundary:'#FFEEDF'     
    }
    
  ]
    
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
          
          />
        )
      }
      
      
      <Footer/>
        
    </div>
  );
}

export default App;
