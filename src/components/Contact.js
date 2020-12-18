import React, { useEffect } from 'react';

import { Words, Frame } from 'arwes';

export default function Contact() {

    useEffect(() => marginCheck())

    const marginCheck = () => {
        const contactPageContainer = document.querySelector(".total-contact-container")
        if (contactPageContainer.offsetHeight < contactPageContainer.offsetWidth) {
            const navBar = document.querySelector(".nav-bar")
            contactPageContainer.style.marginTop = (navBar.offsetHeight + 1) + "px"
        }
    }

    return (
        <div className="total-contact-container">
            <div className="contact-info">
                <h2><Words animate>contact_links</Words></h2>
                <div className="contact-link-container">
                    <ul className="contact-links">
                        <li className="link"><Words animate>&lt; tjbachorz@gmail.com &gt;</Words></li>
                        <li className="link"><Words animate>&lt; linkedin &gt;</Words></li>
                        <li className="link"><Words animate>&lt; github &gt;</Words></li>
                        <li className="link"><Words animate>&lt; medium &gt;</Words></li>
                        <li className="link"><Words animate>&lt; twitter &gt;</Words></li>
                        <li className="link"><Words animate>&lt; download_subject_resume &gt;</Words></li>
                    </ul>
                </div>
            </div>
            <div className="contact-image-container">
                <Frame
                    animate
                    level={3}
                    corners={2}
                    layer='secondary'
                >
                    <img src="https://as2.ftcdn.net/jpg/02/60/78/83/500_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg"/>
                </Frame>
            </div>
        </div>
    )
}
