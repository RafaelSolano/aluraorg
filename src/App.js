import { useState } from 'react';
import './App.css';
import Header  from './components/Header/Header';
import FormUser from './components/FormUser/FormUser';
import MyOrg from './components/MyOrg';
import Team from './components/Team';

function App() {

  const [showForm, updateShow] = useState(true)
  const switchShow = () =>{
    updateShow(!showForm)
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
      colorSecundary:'#FDE7E8'     
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
      
      {showForm  && <FormUser teams ={teams.map((equipo) => equipo.title)} />}
      <MyOrg switchShow ={switchShow}/>
      {teams.map((team)=> <Team data = {team} key ={team.title}/>)}
      
    
        
    </div>
  );
}

export default App;
