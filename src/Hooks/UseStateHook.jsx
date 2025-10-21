import React, { useState } from 'react'
import "../App.css"
const UseStateHook = () => {
    const [history, setHistory] = useState([""]);
    const [index, setIndex] = useState(0);

const addHistory=(value)=>{
    const newHistory = history.slice(0,index+1);
    setHistory([...newHistory,value]);
    setIndex(history.length);

}
   const undo = () => index > 0 && setIndex(index-1);
   const redo = () => index < history.length && setIndex(index+1);
   return  (
    <div className='useState-parent'>
        <h1>UseState() Hook Example</h1>
        <h2>Undo/Redo System Logic</h2>
        <h3>Current value : {history[index]}</h3>
       <input className='Input' value={history[index]} onChange={(e) => addHistory(e.target.value)}/>
       <div className='useState-conatiner'>
         <button  className= "useState-conatiner-undo"onClick={undo}>⬅️</button>
         <button  className= "useState-conatiner-redo" onClick={redo}>➡️</button>
       </div>
    </div>
  )
}

export default UseStateHook;