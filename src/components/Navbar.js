import React from 'react';

export default function Navbar({ selectedPage, setSelectedPage }) {

    
    const makeTargetPage = (event) => {
        const page = event.currentTarget.className.split(" ")[0];
        setSelectedPage(page)
    }
    
    const checkIfActive = (pageName) => {
        // const navBar = document.querySelector(".nav-bar")
        // if (navBar) {
        //     const navBarWidth = navBar.offsetWidth
        //     const tabStyle = { borderWidth: `${navBarWidth / 3}px` }
        // }
        // border: 1px solid white;
        if (pageName === selectedPage) {
            return {
                backgroundColor: '#27dafd',
                color: '#010506'
            }
        }
    }

    return (
        <div className="nav-bar">
            <h5 className="bio nav-item" style={checkIfActive("bio")} onClick={makeTargetPage}>Bio</h5>
            <h5 className="projects nav-item" style={checkIfActive("projects")} onClick={makeTargetPage}>Projects</h5>
            <h5 className="contact nav-item" style={checkIfActive("contact")} onClick={makeTargetPage}>Contact</h5>
        </div>
    )
}
