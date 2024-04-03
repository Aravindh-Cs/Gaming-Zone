// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Home from './components/home';
import Games from './components/card';
import Form from './components/form';
import './index.css';
import { Route,Routes} from 'react-router-dom';
import Profilepic from './images/profile-pic.png'

const App = () => {
  
const [img,setimg] = useState();
const [name,setuname] = useState();
const [email,setemail] = useState();
const [age,setage] = useState();
const [phone,setphone] = useState();
const [err,seterr] = useState(false)

const imgsrc = localStorage.getItem('image');
const getname = localStorage.getItem('name');
const getmail = localStorage.getItem('email');
const getage = localStorage.getItem('age');
const getmobile = localStorage.getItem('phone');

useEffect(()=>
{

  if(imgsrc === ''||getname === ''||getmail === ''||getage === ''|| getmobile === '')
  {
    seterr(false);
  }
  else if(imgsrc,getname,getmail,getage,getmobile)
  {
    setimg(imgsrc);
    setuname(getname);
    setage(getage);
    setemail(getmail);
    setphone(getmobile);
    seterr(true)
  }
  else
  {
    seterr(false)
    localStorage.setItem('image',Profilepic)
  }
  if(imgsrc === '')
  {
    setimg(Profilepic);
    localStorage.setItem('image',Profilepic)
  }
  else if(!imgsrc)
  {
    setimg(Profilepic)
  }
})

  return (
      <div>
        {err?<>
          <Header img={img} name={name} age={age} email={email} phone={phone}/>
        <div className='main'>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/games' Component={Games}></Route>
        <Route path='/link' Component={Home}></Route>
      </Routes></div>
        </>:<Form/>}
    </div>
  );
};

export default App;