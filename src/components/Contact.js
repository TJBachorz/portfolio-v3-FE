import React, { useState, useEffect } from 'react';

import { Words, Frame, Button } from 'arwes';

import resumePDF from '../assets/TJ_Bachorz_Resume.pdf';
import resumeImage from '../assets/BACHORZ_THOMAS_RESUME_PERSONAL.jpeg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import medium from '../assets/medium.png';
import twitter from '../assets/twitter.png';

export default function Contact() {

    const [ animShow, setAnimShow ] = useState(false)

    useEffect(() => {
        setAnimShow(!animShow)
        return () => setAnimShow(!animShow)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitted")
    }

    return (
        <>
            <section className="total-contact-container">
                <div className="contact-nav">
                        <h5 className="link">Linkedin</h5>
                        <h5 className="link">Github</h5>
                        <h5 className="link">Medium</h5>
                        <h5 className="link">Twitter</h5>
                    {/* <div className="contact-link">
                    </div>
                    <div className="contact-link">
                    </div>
                    <div className="contact-link">
                    </div>
                    <div className="contact-link">
                    </div> */}
                </div>
                <div className="resume-and-email">
                    <div className="contact-image-container">
                        <Frame
                            show={animShow}
                            animate={true}
                            level={3}
                            corners={2}
                            layer='secondary'
                        >
                            <div className="fuzzy-background">
                                <a href={resumePDF}><img className="resume-image" src={resumeImage} alt="TJ Bachorz's Resume"/></a>
                            </div>
                        </Frame>
                    </div>
                    <div className="email-me">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <Words className="label" animate>contact_subject:</Words>
                            <input id="email" type="text" name="email" placeholder="email"/>
                            <textarea id="message" rows="6" cols="40" name="message" placeholder="insert_message_here"/>
                            <Button id="submit" type="submit">submit</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
