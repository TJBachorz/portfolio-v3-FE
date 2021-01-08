import React, { useState, useEffect } from 'react';

import { Words, Frame, Button, Animation } from 'arwes';

import { mailerURL, onLoadEffects } from './Utilities';

import resumePDF from '../assets/TJ_Bachorz_Resume.pdf';
import resumeImage from '../assets/BACHORZ_THOMAS_RESUME_PERSONAL.jpeg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import medium from '../assets/medium.png';
import twitter from '../assets/twitter.png';

import { isEmpty } from 'lodash';


export default function Contact() {
    
    const initialState = {
        full_name: "",
        from: "",
        subject: "",
        message: ""
    }
    
    const [ animShow, setAnimShow ] = useState(false)
    const [ email, setEmail ] = useState({...initialState})
    
    const typingAudio = document.querySelector(".typing-audio")
    const errorAudio = document.querySelector(".error-audio")
    const deployAudio = document.querySelector(".deploy-audio")

    useEffect(() => onLoadEffects(animShow, setAnimShow, typingAudio), [animShow, typingAudio])

        
    const successMessage = document.querySelector(".email-success")
    const requireValidEmail = document.querySelector(".email-required")
    const requireMessage = document.querySelector(".message-required")

    const invalidEmail = () => requireValidEmail.style.display = "inline-flex"
    const invalidMessage = () => requireMessage.style.display = "inline-flex"

    const errorHash = {
        "from": invalidEmail,
        "from.email": invalidEmail,
        "content.0.value": invalidMessage,
    }

    const inputBaseStyle = {
        opacity: 0.1,
        backgroundColor: "#05181d",
        color: "#27dafd",
        boxShadow: "1px 1px #f8f8ff",
        margin: "20px 0px 0px 0px",
        width: "1%",
        transition: "all 200ms ease-in-out",
    }

    const inputStyle = {
        entering: {
            width: '100%',
            opacity: 0.5
        },
        entered: {
            border: "1px solid",
            width: '100%',
            opacity: 1
        }
    }

    const sendEmail = (event) => {
        event.preventDefault()
        fetch(`${mailerURL}/mail`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        }).then(response => response.json())
        .then(renderResponse)
    }

    const renderResponse = (result) => {
        if (isEmpty(result)) {
            setEmail({...initialState})
            successMessage.style.display = "inline-flex"
            deployAudio.play()
            resetResponseMessage()
        } else {
            successMessage.style.display = "none"
            validateEmailAddress()
            const emailErrors = result.response.body.errors
            emailErrors.map(error => errorHash[error.field]())
            errorAudio.play()
        }
    }

    const validateEmailAddress = () => {
        return !email.from.includes("@") || email.from.length === 0 ?
            errorHash["from"]()
            : null
    }

    const resetResponseMessage = () => {
        requireMessage.style.display = "none"
        requireValidEmail.style.display = "none"
    }

    return (
        <Animation show={animShow} animate timeout={700}>
            {anim => (
                <>
                    <div className="contact-nav">
                        <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tjbachorz/"><h4><Words animate>Linkedin</Words></h4></a>
                        <a className="link" target="_blank" rel="noreferrer" href="https://github.com/TJBachorz"><h4><Words animate>Github</Words></h4></a>
                        <a className="link" target="_blank" rel="noreferrer" href="https://tjbachorz.medium.com/"><h4><Words animate>Medium</Words></h4></a>
                        <a className="link" target="_blank" rel="noreferrer" href="https://twitter.com/ThomasBachorz"><h4><Words animate>Twitter</Words></h4></a>
                        <a className="link-image" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tjbachorz/"><img className="soc-med-image" src={linkedin} alt="linked in"/></a>
                        <a className="link-image" target="_blank" rel="noreferrer" href="https://github.com/TJBachorz"><img className="soc-med-image" src={github} alt="github"/></a>
                        <a className="link-image" target="_blank" rel="noreferrer" href="https://tjbachorz.medium.com/"><img className="soc-med-image" src={medium} alt="medium"/></a>
                        <a className="link-image" target="_blank" rel="noreferrer" href="https://twitter.com/ThomasBachorz"><img className="soc-med-image" src={twitter} alt="twitter"/></a>
                    </div>
                    <section className="total-contact-container">
                        <div className="resume-and-email">
                            <div className="resume-container">
                                <Frame
                                    className="frame"
                                    show={animShow}
                                    animate
                                    level={3}
                                    corners={2}
                                    layer='secondary'
                                >
                                    <div className="fuzzy-background">
                                        <a href={ resumePDF } target="_blank" rel="noreferrer">
                                            <img className="resume-image" src={resumeImage} alt="TJ Bachorz's Resume"/>
                                        </a>
                                    </div>
                                </Frame>
                                <a className="download-resume" href={ resumePDF } download><Button show={animShow} animate>download_resume</Button></a>
                            </div>
                            <div className="email-me">
                                <form id="email-form" autocomplete="off" onSubmit={sendEmail} className="contact-form">
                                    <Words show={animShow} className="label" animate>email_subject:</Words>
                                    <input id="full-name" className="form-item" type="text" name="full_name" placeholder="your_full_name" 
                                        style={{...inputBaseStyle, ...inputStyle[anim.status]}}
                                        value={email.full_name} 
                                        onChange={(event) => setEmail({...email, full_name: event.target.value})}
                                    />
                                    
                                    <input id="user-email" className="form-item" type="text" name="from" placeholder="your_email_address" 
                                        style={{...inputBaseStyle, ...inputStyle[anim.status]}}
                                        value={email.from} 
                                        onChange={(event) => setEmail({...email, from: event.target.value})}
                                    />
                                    <p className="email-required"><Words show={animShow} animate layer="alert">* valid_email_required</Words></p>
                                    
                                    <input id="subject" className="form-item" type="text" name="subject" placeholder="subject" 
                                        style={{...inputBaseStyle, ...inputStyle[anim.status]}}
                                        value={email.subject} 
                                        onChange={(event) => setEmail({...email, subject: event.target.value})}
                                    />
                                    <textarea id="message" className="form-item" rows="6" cols="40" name="message" placeholder="your_message" 
                                        style={{...inputBaseStyle, ...inputStyle[anim.status]}}
                                        value={email.message} 
                                        onChange={(event) => setEmail({...email, message: event.target.value})}
                                    />
                                    <p className="message-required"><Words show={animShow} animate layer="alert">* required</Words></p>
                                    
                                    <Button show={animShow} animate id="submit" type="submit">submit</Button>
                                    <p className="email-success"><Words layer="success">email sent!</Words></p>
                                </form>
                            </div>
                        </div>
                    </section>   
                </>
            )}
        </Animation>
    )
}