import { useState } from 'react';
import './App.css';
import Header  from './components/Header/Header';
import FormUser from './components/FormUser/FormUser';
import MyOrg from './components/MyOrg';

function App() {

  const [showForm, updateShow] = useState(true)
  const switchShow = () =>{
    updateShow(!showForm)

  }
  return (
    <div className="App">
      <Header/>
      {showForm === true ?<FormUser/> : <></> }
      
      <MyOrg switchShow ={switchShow}/>
    
        
    </div>
  );
}

export default App;
