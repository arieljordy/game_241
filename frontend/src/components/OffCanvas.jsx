import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function OffCanvas({titre,children,declencheur,show,setShow}){
    const handleClose=()=>setShow(false)
  
    return(
      <>
        <span>
            {declencheur}
        </span>
        <Offcanvas placement="end" show={show} onHide={handleClose} scroll={!true} backdrop={true}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="element-bleu">{titre}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {children}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
}
