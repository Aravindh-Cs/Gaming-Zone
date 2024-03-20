import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Intro from '../images/intro-img.png'

const home = () => {
  return (
    <>
    <div className='home'>
      <div className="left">
        <h2>Welcome to Our Game World!</h2>
        <p>Get ready for an immersive gaming experience!
           Our collection of games, crafted with JavaScript,
           offers endless entertainment and excitement. Whether
            you're seeking thrilling adventures, mind-bending puzzles, 
            or intense challenges, you'll find it all here. Step into 
            our world of interactive fun and let the games begin!
        </p>
        <button><Link to={"/games"}>Start To Play</Link></button>
      </div>
      <div className="right">
        <img src={Intro} alt="" />
      </div>
    </div>
</>
  )}

export default home
