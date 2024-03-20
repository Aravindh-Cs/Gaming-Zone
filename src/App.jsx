// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Home from './components/home';
import Games from './components/card';
import Form from './components/form';
import './index.css';
import { Route,Routes } from 'react-router-dom';
import Profilepic from './images/profile-pic.png'

const App = () => {
  
const [img,setimg] = useState(Profilepic);
const [name,setuname] = useState();
const [email,setemail] = useState();
const [age,setage] = useState();
const [phone,setphone] = useState();
const [err,seterr] = useState(0);

localStorage.setItem('err',err);
const uimg = (data)=>
{
  const imgsrc = localStorage.getItem('image');
  if(imgsrc)
  {
    setimg(imgsrc)
  } else if(imgsrc === '')
  {
   setimg(data);
  }
  }
const uname =(data)=>
{
  const name = localStorage.getItem('name');
  if(name)
  {
    setuname(name);
  }else if(name === '')
  {

  }else{
    setuname(data);
  }
}
const uemail =(data)=>
{
  const mail = localStorage.getItem('email');
  if(mail)
  {
    setemail(mail);
  }else if(mail === '')
  {
  }else{
    setemail(data)
  }
}
const uage =(data)=>
{
const age = localStorage.getItem('age');
  if(age)
  {
   setage(age);
  }else if(age === '')
  {
  }
  else{
    setage(data);
  }
}
const uphoneno = (data) =>
{
const mobile = localStorage.getItem('phone');
  if(mobile)
  {
   setphone(mobile);
  }else if(mobile === '')
  {
console.log('mobile')
  }
  else{
    setphone(data);
   }  
}
let error = localStorage.getItem('err');
useEffect(()=>
{
  const imgsrc = localStorage.getItem('image');
  setimg(imgsrc);
  const name = localStorage.getItem('name');
  setuname(name);
  const mail = localStorage.getItem('email');
  setemail(mail);
  const age = localStorage.getItem('age');
  setage(age);
  const mobile = localStorage.getItem('phone');
  setphone(mobile);

  if(imgsrc === ''||name === ''||mail === ''||age === ''|| mobile === '')
  {
    seterr(1);
  }
  if(imgsrc === '')
  {
    setimg(Profilepic)
    localStorage.setItem('image',Profilepic)
  }
})

  return (
    <>
      <div className={err===0?'hide':'display'}>
      <Form imageSrc={uimg} Name={uname} Email={uemail} Age={uage} Phone={uphoneno}/>
      </div>
      <Header img={img} name={name} email={email} age={age} phone={phone}/>
      <div className='main'>
        <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/games' Component={Games}></Route>
        <Route path='/link' Component={Home}></Route>
      </Routes>
    </div>
    </>
  );
};

export default App;