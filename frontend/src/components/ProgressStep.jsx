import React,{useState} from 'react'
import "../assets/css/component-next-step-progress.css"
import {FaCoins,FaHome,FaStarHalfAlt,FaThumbsUp,FaCheck} from "react-icons/fa"
import { FaFlag,FaGear } from "react-icons/fa6"


const steps = [
    { 
        icon: <FaFlag/>, 
        label: "Début"
    },
    { 
        icon: <FaCoins/>, 
        label: "Finances"
    },
    { 
        icon: <FaHome/>, 
        label: "Propriérté"
    },
    {
        icon:<FaGear/>,
        label:"Réparation"
    },
    { 
        icon: <FaStarHalfAlt/>, 
        label: "évaluation"
    },
    { 
        icon: <FaThumbsUp/>, 
        label: "Livraison"
    }
]

export default function ProgressStep(){
    const [activeStep,setActiveStep]=useState(0)
    const nextStep=(currentStep)=>{
        setActiveStep((lastStep)=>{
            if(lastStep===currentStep-1){
                return lastStep+1
            }
            return lastStep
        })

    }

  return(
    <>
        <div className="main">
            <ul>
                {
                    steps.map((step,index)=>(
                        <li key={index} onClick={() => nextStep(index)}>
                            <span className="icons awesome">
                                {step.icon} 
                            </span>
                            <p className="label text-capitalize">{step.label}</p>
                            {
                                index===0?(
                                    <>
                                        <span className="step-debut bg-bleu-sombre"></span>  
                                    </>):
                                    <>
                                        <div className={`step step-${index + 1} ${index <= activeStep ? 'active' : ''}`}>
                                            <p>{index}</p>
                                            <FaCheck className="awesome" />
                                        </div>
                                        <p className="label text-capitalize">{step.label}</p>
                                    </>
                                
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}
