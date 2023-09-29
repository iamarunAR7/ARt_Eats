import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import Login from './components/Login';
 
import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies=new Cookies();

function App() {

const[isAuth,setisAuth]=useState(cookies.get("auth-token"))
 

if(!isAuth){
  return (
    <div>
        <Login setisAuth={setisAuth}/>
    </div>
  );
}

  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
    </div>
  );
}

export default App;
