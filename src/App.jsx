import {useEffect, useState} from 'react'
import './App.css'

function App(){
  const [color, setColor] = useState("");

  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  
  return (
    <div >
      <button className={'green'} onClick={()=>{
        setColor('green')
      }}>green</button>
      <button className={'red'} onClick={()=>{
        setColor('red')
      }}>red</button>
      <button className={'blue'} onClick={()=>{
        setColor('blue') 
      }}>blue</button>
      <button className={''} onClick={()=>{
        setColor('')
      }}>default</button>
    </div>
  )
}



export default App
