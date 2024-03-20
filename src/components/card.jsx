import React from "react";
import List from './list'
import Design from "./design";
import './style.css'


const items = () =>
{
    return(
       <>
       <div className="whole"><h1 className="h1">Games:</h1>
       <div className="container">
       <div className="cardbox">
       {List.items.map((item,index,)=>
       {
        return(
            <Design key={index} title={item.title} img={item.img} live={item.live} code={item.code} desc={item.description}></Design>
        )
       })}</div>
       </div>
       </div>
       </>
    )
}

export default items