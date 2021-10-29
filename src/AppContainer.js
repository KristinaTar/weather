import React, {useEffect} from 'react'
import {getWeatherData, setNewTemperature} from "./reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import App from "./App";
import convertTempToBackground from './ConvertTempToBackground';

const AppContainer=(props)=>{
    useEffect(()=>{
        props.getWeatherData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

let color=convertTempToBackground(props.temperature);

    return <App icon={props.icon}
                temp={props.temperature}
                city={props.city}
                setNewTemperature={props.setNewTemperature}
                color={color}
    />

}
const mapStateToProps = (state) => ({
    icon: state.weatherReducer.icon,
    temperature:state.weatherReducer.temperature,
    city:state.weatherReducer.city
});


export default compose (connect(mapStateToProps, {getWeatherData, setNewTemperature}))(AppContainer);