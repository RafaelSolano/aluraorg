import { useState } from "react";
import "./styles.css"

const MyOrg = (props) =>{

    /*
    const [name, updateName ] = useState("Rafael");
    const [show , updateShow] = useState(true)
    const clickControl =()=>{
        console.log("SE hizo click" , !show);
        updateShow(!show)

    }
*/
    return <section className="myOrg">
        <div></div>
        <h2 className=" MyOrg__title">Mi organización </h2>
        <img className="MyOrg__img" src="/img/addButton.png" alt="add button" onClick={props.switchShow}/>
    </section>

}

export default MyOrg;

