import React, { useEffect } from 'react'
import Camera from '../images/camera.png';
import Profilepic from '../images/profile-pic.png';
import { useState} from 'react';
import './style.css'

const form = () => {
  const [usname,setuserName] = useState();
  const [email,setemail] = useState();
  const [age,setage] = useState();
  const [phone,setphone] = useState();
  const [disabled,setdisable] = useState(false);
  const [storeImg,setstoreImg] = useState(Profilepic);
  const [check,setcheck] = useState(false);
  const [active,setactive] = useState(false);
 

  const handleUpload = (e) =>
  {
    e.preventDefault();
    setactive(true);
    localStorage.getItem('image',storeImg);
    localStorage.getItem('name',usname);
    localStorage.getItem('email',email);
    localStorage.getItem('age',age);
    localStorage.getItem('phone',phone);
    window.location.reload();
  }
  const handlename = (e) =>
  {
    let name = e.target.value;
    setuserName(name);
    localStorage.setItem('name',name);
    checking();
  }
  const handlemail = (e) =>
  {
    let emailVal = e.target.value.trim();
    setemail(emailVal);
    localStorage.setItem('email',emailVal);
    checking();
  }
  const handleage = (e) =>
  {
    let ages = e.target.value;
    setage(ages);
    localStorage.setItem('age',ages);
    checking();
  }
  const handlephone = (e) =>
  {
    let phoneno = e.target.value;
    setphone(phoneno);
    localStorage.setItem('phone',phoneno);
    checking();
  }

const checking = () =>
{
console.log('working')
}

  const handlecheck = (e) =>
  {
    setcheck(e.target.checked)
  }
  useEffect(()=>
  {
    if(!usname || !age || !email || !phone || !check || !storeImg)
    {
     setdisable(true);
    }
    else
    {
     setdisable(false)
    }
  })
const getImg =(e)=>
  {
    const file = e.target.files[0];
    if(file)
    {
      const reader = new FileReader();
      reader.onloadend= () =>
      {
          setstoreImg(reader.result);   
          imageSrc(reader.result);
          localStorage.setItem('image',reader.result);
      }
      reader.readAsDataURL(file);
    }

  }
  return (
<>
    <div className={active?'hide':'form'}>

      <form onSubmit={handleUpload}>

      <div className="profile-area">
        <img src={storeImg} alt="" />

        <div className="camera">
          <img src={Camera} alt="" />
          <input type="file" accept="image/*" onChange={getImg}/>
        </div>
      </div>
        
        <div className="input">
            <input 
              type="text"
              name="name"
              value={usname || ""}
              placeholder='Name'
              onChange={handlename}
              autoComplete="off" />
        </div>
        <div className="input">
            <input 
              type="email" 
              name='email'
              value={email || ""}
              placeholder='Email' 
              onChange={handlemail}
              autoComplete="off" />
        </div>
        <div className="input">
            <input 
              type="number" 
              name='phone'
              value={phone || ""}
              placeholder='Phone No' 
              onChange={handlephone}
              autoComplete='off'/>
        </div>
        <div className="input">
            <input 
              type="number" 
              name='age'
              value={age || ""}
              placeholder='Age' 
              onChange={handleage}/>
        </div> 
        <div className="input">
            <input type="checkbox" className='checkbox' checked={check} onChange={handlecheck}/>
            &nbsp; <p> I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
        </div>
        <input type="submit" value="Submit" className={disabled?'disable':'enable'} disabled={disabled}></input>
      </form>
    </div>
    </>
  )
 }
export default form
