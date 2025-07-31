import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import FirstView from '../components/FirstView'

export default function HomePage(){
  const [display,setDisplay]=useState(true)
  setTimeout(()=>{
    setDisplay(false)
  },3000)

  return(
    <>
        {
          display?(
            <Spinner visibility={display}/>
          ):(
            <>
                <FirstView/>
            </>
          )
        }
    </>
  )
}