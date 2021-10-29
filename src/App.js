import './App.css';
import React from 'react'
import {Form} from "react-bootstrap"


function App(props) {

    return <div className="App" style={{background: props.color}} >
        <div style={{textAlign:'center'}}>

        <img src={props.icon} alt="Weather icon" /> <br/>
        {(props.temp>0)? '+'+Math.round(props.temp):Math.round(props.temp)}

        <br/>
        -10
        <Form.Range style={{maxWidth:'60%', width:'300px', margin:'5px'}}
            value={2.5*props.temp+25}
                    onChange={(e)=>{props.setNewTemperature((e.target.value-25)/2.5)}}
        />
        +30 <br/>
            <div>{props.city}</div>


    </div>
    </div>


}
export default App;
