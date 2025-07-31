import React from 'react'
import "../assets/css/component-select.css"

export default function Select({group,array}){

    return(
        <>
            <div className="my-select">
                <select className="my-select-select element-bleu bg-trans">
                    <optgroup label={group}>
                        {
                            array.map((item,index)=>(
                                <option key={index} value={item}>{item}</option>
                                )
                            )
                        }
                    </optgroup>
                </select>
            </div>
        </>
    )
}
