import React from 'react';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getCountry } from '../src/acctions/index';
import Inicio from './Commponents/inicio/Incio'
import Home from  './Commponents/home/home'
import { Route } from 'react-router-dom';
import './App.css';
import  Detalle from './Commponents/detalle/Detalle'
import Crear from './Commponents/creacion/Crear'
import Actividad from './Commponents/actividad/Actividad'


function App() {
  const dispatch = useDispatch();
            useEffect(() => {
    dispatch(getCountry())
  }, [dispatch])

console.log(getCountry('hola'))
  return (
    <>
    <Route exact path='/' component={Inicio} />
    <Route exact path ='/country' component = {Home}/>
    <Route exact path = '/countries/:id' component = {Detalle}/>
    <Route exact path = '/crear' component ={Crear}/>
    <Route exact path = '/actividad' component ={Actividad}/>
    </>
  
  );
}

export default App;