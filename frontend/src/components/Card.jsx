import React from 'react'
import {Link} from "react-router-dom"
import { FaInfoCircle } from "react-icons/fa"
import { IoTime } from "react-icons/io5"
import "../assets/css/component-card.css"

export default function Card({img}){
    const getRandomZeroToTen=()=>{
        return Math.floor(Math.random() * 11)+1
    }
    const temps=getRandomZeroToTen()

    return(
        <>
            <div className="my-card-container">
                <Link href="/" className="hero-image-container a-link">
                    <img className="hero-image card-img" src={img} alt="Img du projet"/>
                </Link>
                <main>
                    <h3 className="element-bleu mt-2">Nom de projet</h3>
                    <p className="element-noir text-align-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil quis molestias eius rerum culpa illum adipisci incidunt.
                    </p>
                    <div className="flex-row">
                        <button className="coin-base bg-trans cursor-help border-none" onClick={()=>alert()}>
                            <FaInfoCircle className="small-icon element-bleu me-2"/>
                            <span className="element-bleu">En savoir plus</span>
                        </button>
                        <div className="time-left">
                            <IoTime className="small-icon element-bleu me-2 cursor-pointer"/>
                            <span className="element-bleu cursor-pointer">Il y a {temps} {temps===1?"jour":"jours"}</span>
                        </div>
                    </div>
                </main>
                <div className="card-attribute">
                    <img src={img} alt="avatar" className="small-avatar"/>
                    <p>
                        initié par
                        <span>
                            <Link to="/" className="a-link mx-1">Jordy ELLANGMANE</Link>
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}
