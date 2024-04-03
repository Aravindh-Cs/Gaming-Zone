import Camera from '../images/camera.png';
import React, { useState } from 'react';
import './style.css';

const option = (props) => {

  const [img,setimg] = useState()
  const handleEdit = (e) =>
  {
     const file = e.target.files[0];

     if(file)
     {
      const reader = new FileReader();

      reader.onloadend=()=>
      {
           setimg(reader.result);
           localStorage.setItem('image',reader.result);
           window.location.reload();
      }
      reader.readAsDataURL(file)
     }
  }
  const deleteaccount = () =>
   {
    console.log('deleted');
    localStorage.setItem('image','');
    localStorage.setItem('name','');
    localStorage.setItem('email','');
    localStorage.setItem('age','');
    localStorage.setItem('phone','');
    window.location.reload();
   }  
  return (
    <>
      <div className="show">
        <ul className='ul'>
            <li><p>Profile:</p>
            <div className="edit"><img src={Camera} alt="" /><input type="file" onChange={handleEdit} accept='image/*'/></div>
            </li>
            <li><p>Name:</p>{props.name}</li>
            <li><p>Email:</p>{props.email}</li>
            <li><p>Mobile:</p>{props.phone}</li>
            <li><p>Age:</p>{props.age}</li>
        </ul>
        <button onClick={deleteaccount}>Delete Account</button>
      </div>
      </>
  )
}

export default option
