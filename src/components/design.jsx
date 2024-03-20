import React from 'react'
// import { Link} from 'react-router-dom'

const design = (props) => {
  return (
    <div className='card'>
      <h3>{props.title}:</h3>  
      <img src={props.img} alt="" />
      <div className="link">
      <a href={props.live}>Live Url</a>
      <a href={props.code}>Code</a></div>
      <p>{props.desc}</p>
    </div>
  )
}

export default design
