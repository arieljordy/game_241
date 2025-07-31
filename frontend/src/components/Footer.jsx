import React from 'react'
import { MDBFooter,MDBContainer,MDBCol,MDBRow } from 'mdb-react-ui-kit'
import {FaXTwitter} from "react-icons/fa6"
import {FaFacebook,FaReact,FaNodeJs,FaYoutube,FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import {Link} from "react-router-dom"
import "../assets/css/component-footer.css"
import ContactForm from './ContactForm'

export default function Footer(){

    return(
        <MDBFooter className='text-center text-lg-start element-bleu bg-blanc border-top-gris'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                <span className="element-noir">Afri-digit, devéloppé avec React.js Node.js et MongoDB</span>
                </div>
                <div className="d-flex">
                    <div className="m-1 circle-link-footer">
                        <Link to="" target="_blank">
                            <FaFacebook className="icon-size-footer"/>
                        </Link>
                    </div>
                    <div className="m-1 circle-link-footer">
                        <Link to="" target="_blank">
                            <FaXTwitter className="icon-size-footer"/>
                        </Link>
                    </div>
                    <div className="m-1 circle-link-footer">
                        <Link to="" target="_blank">
                            <FaYoutube className="icon-size-footer"/>
                        </Link>
                    </div>
                    <div className="m-1 circle-link-footer">
                        <Link to="" target="_blank">
                            <FaInstagram className="icon-size-footer"/>
                        </Link>
                    </div>
                    <div className="m-1 circle-link-footer">
                        <Link to="" target="_blank">
                            <FaLinkedin className="icon-size-footer"/>
                        </Link>
                    </div>
                    <div className="m-1 circle-link-footer">
                        <Link to="" target="_blank">
                            <FaGithub className="icon-size-footer"/>
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                Mentions légales 
                            </h6>
                            <p className="text-align-justify element-noir">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil quis molestias eius rerum culpa illum adipisci incidunt.
                            </p>
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
                        <p> 
                            <Link to="/" target="_blank" className='text-reset'>
                                <FaReact className="me-2 logo-react-tournant icon-size-footer-2"/>
                                React.js
                            </Link>
                        </p>
                        <p>
                            <Link to="/" target="_blank" className='text-reset'>
                                <FaNodeJs className="me-2 icon-size-footer-2" />
                                Node.js
                            </Link>
                        </p>
                        <p>
                            <Link to="/" target="_blank" className='text-reset'>
                                <SiMongodb className="me-1  icon-size-footer-2" />
                                MongoDB
                            </Link>
                        </p>
                        </MDBCol> 
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Nous contacter</h6>
                                <ContactForm/>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Actualités</h6>
                            <p className="text-align-justify element-noir">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil quis molestias eius rerum culpa illum adipisci incidunt. Voluptatibus deserunt tempora debitis ut voluptates alias minus eligendi delectus nemo earum.
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mt-3 mb-md-0 mb-4'>
                            <h6 className='text-uppercase text-center fw-bold mb-4'>CGU</h6>
                            <p className="text-align-justify element-noir">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil quis molestias eius rerum culpa illum adipisci incidunt. Voluptatibus deserunt tempora debitis ut voluptates alias minus eligendi delectus nemo earum.
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mt-3 mb-md-0 mb-4'>
                            <h6 className='text-uppercase text-center fw-bold mb-4'>Données personnelles </h6>
                            <p className="text-align-justify element-noir">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil quis molestias eius rerum culpa illum adipisci incidunt. Voluptatibus deserunt tempora debitis ut voluptates alias minus eligendi delectus nemo earum.
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mt-3 mb-md-0 mb-4'>
                            <h6 className='text-uppercase text-center fw-bold mb-4'>Gestion des cookies</h6>
                            <p className="text-align-justify element-noir">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil quis molestias eius rerum culpa illum adipisci incidunt. Voluptatibus deserunt tempora debitis ut voluptates alias minus eligendi delectus nemo earum.
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mt-3 mb-md-0 mb-4'>
                            <h6 className='text-uppercase text-center fw-bold mb-4'>Blog</h6>
                            <p className="text-align-justify element-noir">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nihil quis molestias eius rerum culpa illum adipisci incidunt. Voluptatibus deserunt tempora debitis ut voluptates alias minus eligendi delectus nemo earum.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2024 - {(new Date()).getFullYear()} | Conçu par :{" "} 
                <Link className='text-reset fw-bold' target="_blank" to='/'>
                 Jordy ELLANGMANE
                </Link>
            </div>
        </MDBFooter>
    )
}