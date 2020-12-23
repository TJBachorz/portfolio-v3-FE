import React, { useState, useEffect } from 'react';

import { Words, Frame, Button } from 'arwes';

import resumePDF from '../assets/TJ_Bachorz_Resume.pdf';
import resumeImage from '../assets/BACHORZ_THOMAS_RESUME_PERSONAL.jpeg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import medium from '../assets/medium.png';
import twitter from '../assets/twitter.png';

export default function Contact() {

    const [ contactAnimShow, setContactAnimShow ] = useState(false)

    useEffect(() => {
        setContactAnimShow(true)
        // return () => setContactAnimShow(!contactAnimShow)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
    }

    return (
        <>
            <section className="total-contact-container">
                <div className="contact-nav">
                    <a className="link" href="https://www.linkedin.com/in/tjbachorz/"><h4><Words animate>Linkedin</Words></h4></a>
                    <a className="link" href="https://github.com/TJBachorz"><h4><Words animate>Github</Words></h4></a>
                    <a className="link" href="https://tjbachorz.medium.com/"><h4><Words animate>Medium</Words></h4></a>
                    <a className="link" href="https://twitter.com/ThomasBachorz"><h4><Words animate>Twitter</Words></h4></a>
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
                        <form onSubmit={handleSubmit} className="contact-form">
                            <Words className="label" animate>contact_subject:</Words>
                            <input id="email" type="text" name="full_name" placeholder="user_full_name"/>
                            <input id="email" type="text" name="email" placeholder="user_email"/>
                            <input id="subject" type="text" name="subject" placeholder="subject"/>
                            <textarea id="message" rows="6" cols="40" name="message" placeholder="insert_message_here"/>
                            <Button animate id="submit" type="submit">submit</Button>
                        </form>
                    </div>
                </div>
            </section>   
        </>
    )
}
