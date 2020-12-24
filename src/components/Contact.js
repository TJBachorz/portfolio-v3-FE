import React, { useState, useEffect } from 'react';

import { Words, Frame, Button } from 'arwes';

import resumePDF from '../assets/TJ_Bachorz_Resume.pdf';
import resumeImage from '../assets/BACHORZ_THOMAS_RESUME_PERSONAL.jpeg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import medium from '../assets/medium.png';
import twitter from '../assets/twitter.png';

export default function Contact() {

    const initialState = {
        full_name: "",
        from: "",
        subject: "",
        message: ""
    }

    const [ contactAnimShow, setContactAnimShow ] = useState(false)
    const [ email, setEmail ] = useState({...initialState})

    const successMessage = document.querySelector(".email-success")
    const failedMessage = document.querySelector(".email-failed")

    useEffect(() => {
        setContactAnimShow(true)
        return () => setContactAnimShow(!contactAnimShow)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:4000/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                full_name: email.full_name,
                from: email.from,
                subject: email.subject,
                message: email.message
            })
        }).then(response => response.json())
        .then(console.log)
    }

    const renderResponse = (result) => {
        if (result === "success") {
            setEmail({...initialState})
            successMessage.style.display = "flex"
            resetResponseMessage()
        } else {
            failedMessage.style.display = "flex"
            resetResponseMessage()
        }
    }

    const resetResponseMessage = () => {
        setTimeout(() => {
            successMessage.style.display = "none";
            failedMessage.style.display = "none";
        }, 10000)
    }

    return (
        <>
            <section className="total-contact-container">
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
                <div className="resume-and-email">
                    <div className="resume-container">
                        <Frame
                            show={contactAnimShow}
                            animate={true}
                            level={3}
                            corners={2}
                            layer='secondary'
                        >
                            <div className="fuzzy-background">
                                <a href={ resumePDF } target="_blank" rel="noreferrer"><img className="resume-image" src={resumeImage} alt="TJ Bachorz's Resume"/></a>
                            </div>
                        </Frame>
                        <a className="download-resume" href={ resumePDF } download><Button show={contactAnimShow} animate>download_resume</Button></a>
                    </div>
                    <div className="email-me">
                        <form id="email-form" onSubmit={handleSubmit} className="contact-form">
                            <Words className="label" animate>contact_subject:</Words>
                            <input id="email" type="text" name="full_name" placeholder="user_full_name" 
                                value={email.full_name} 
                                onChange={(event) => setEmail({...email, full_name: event.target.value})}
                            />
                            <input id="email" type="text" name="from" placeholder="user_email" 
                                value={email.from} 
                                onChange={(event) => setEmail({...email, from: event.target.value})}
                            />
                            <input id="subject" type="text" name="subject" placeholder="subject" 
                                value={email.subject} 
                                onChange={(event) => setEmail({...email, subject: event.target.value})}
                            />
                            <textarea id="message" rows="6" cols="40" name="message" placeholder="insert_message_here" 
                                value={email.message} 
                                onChange={(event) => setEmail({...email, message: event.target.value})}
                            />
                            <Button animate id="submit" type="submit">submit</Button>
                            <p className="email-success"><Words animate layer="success">email sent!</Words></p>
                            <p className="email-failed"><Words animate layer="alert">email failed!  try again!</Words></p>
                        </form>
                    </div>
                </div>
            </section>   
        </>
    )
}
