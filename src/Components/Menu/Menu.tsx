import "./Menu.css"
import React from "react"

export const Menu=()=>{
    const p1 =()=>{
       
       
}

const p2=()=>{
   
}
    return(
        <div className="container">
             <h1 className='p1' onClick={()=>{p1()}}> <span>1 Player</span></h1>
            <h1 className='p2' onClick={()=>{p2()}}> <span>2 Players</span></h1>

        </div>
        
    )

}