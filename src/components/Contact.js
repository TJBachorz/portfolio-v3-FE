import React, { useState, useEffect } from 'react';

import { Words, Frame } from 'arwes';

import resume from '../assets/BACHORZ_THOMAS_RESUME_PERSONAL.jpeg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import medium from '../assets/medium.png';
import twitter from '../assets/twitter.png';

export default function Contact() {

    const [ animShow, setAnimShow ] = useState(false)

    useEffect(() => {
        setAnimShow(!animShow)
        marginCheck()
        return () => setAnimShow(!animShow)
    }, [])

    const handleSubmit = () => {
        console.log("submitted")
    }


    const marginCheck = () => {
        const contactPageContainer = document.querySelector(".total-contact-container")
        if (contactPageContainer.offsetHeight < contactPageContainer.offsetWidth) {
            const navBar = document.querySelector(".nav-bar")
            contactPageContainer.style.marginTop = (navBar.offsetHeight + 1) + "px"
        }
    }

    return (
        <>
            <section className="total-contact-container">
                <Frame
                    show={animShow}
                    animate={true}
                    level={3}
                    corners={2}
                    layer='secondary'
                >
                    <div className="fuzzy-background contact">
                        <img className="contact-image" src={linkedin} alt="linkedin"/>
                        <img className="contact-image" src={github} alt="github"/>
                        <img className="contact-image" src={medium} alt="medium"/>
                        <img className="contact-image" src={twitter} alt="twitter"/>
                    </div>
                </Frame>
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
                                <img className="resume-image" src={resume} alt="TJ Bachorz's Resume"/>
                            </div>
                        </Frame>
                    </div>
                    <div className="email-me">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label for="email">contact_subject:</label>
                            <input id="email" type="text" name="email" placeholder="email"/>
                            <input id="email-body" type="textarea" name="body" placeholder="insert_message_here"/>
                            <input type="submit" value="submit"/>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
