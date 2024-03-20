import React, {useRef} from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Option from './option';

const navbar = ({img,name,email,age,phone}) => 
{
  const nav = useRef();
  const showOption = ()=>
  {
    nav.current.classList.toggle('shows');
  }
  return (
    <>
    <header>
    <nav>
      <div className="logo">
        <Link to={'/'}>
        <h1>G<span>Z</span></h1>
        <h2>Game <span>Zone.</span></h2></Link>
      </div>
      <div className="profile" onClick={showOption}>
          <p className='name'>{name}</p>
          <img src={img}/>
        </div>
    </nav>
    <div className="shows" ref={nav}>
           <Option name={name} email={email} age={age} phone={phone}/>
        </div></header>
    </>
  );
};

export default navbar;