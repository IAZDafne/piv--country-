import React from 'react';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getCountry } from '../src/acctions/index';
import Inicio from './Commponents/inicio/Incio'
import Home from  './Commponents/home/home'
import { Route } from 'react-router-dom';
import './App.css';


function App() {
  const dispatch = useDispatch();
            useEffect(() => {
    dispatch(getCountry())
  }, [dispatch])

console.log(getCountry())
  return (
    <>
    <Route exact path='/' component={Inicio} />
    <Route exact path ='/country' component = {Home}/>
    </>
  
  );
}

export default App;