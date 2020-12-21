import React, { useState, useEffect } from 'react';

import { Words, Frame } from 'arwes';

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
            <div className="total-contact-container">
                <div className="contact-info">
                    <div className="contact-link-container">
                        <ul className="contact-links">
                            <li className="link"><Words animate>&lt;</Words><a href="https://www.linkedin.com/in/tjbachorz/"> <Words animate>linkedin</Words></a><Words animate>&nbsp;&gt;</Words></li>
                            <li className="link"><Words animate>&lt;</Words><a href="https://github.com/TJBachorz"> <Words animate>github</Words></a><Words animate>&nbsp;&gt;</Words></li>
                            <li className="link"><Words animate>&lt;</Words><a href="https://tjbachorz.medium.com/"> <Words animate>medium</Words></a><Words animate>&nbsp;&gt;</Words></li>
                            <li className="link"><Words animate>&lt;</Words><a href="https://twitter.com/ThomasBachorz"> <Words animate>twitter</Words></a><Words animate>&nbsp;&gt;</Words></li>
                            <li className="link"><Words animate>&lt;</Words><a href=""> <Words animate>download_subject_resume</Words></a><Words animate>&nbsp;&gt;</Words></li>
                        </ul>
                    </div>
                </div>
                <div className="contact-image-container">
                    <Frame
                        show={animShow}
                        animate={true}
                        level={3}
                        corners={2}
                        layer='secondary'
                    >
                        <div className="fuzzy-background">
                            <img className="contact-image" src="" alt=""/>
                        </div>
                    </Frame>
                </div>
            </div>
            <div className="email-me">
                <form onSubmit={handleSubmit} className="contact-form">
                    <label for="email">contact_subject:</label>
                    <input id="email" type="text" name="email" placeholder="email"/>
                    <input id="email-body" type="textarea" name="body" placeholder="insert_message_here"/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </>
    )
}
