import React, { useState, useEffect } from 'react';

import { Words, Frame, Animation } from 'arwes';

export default function BioPage() {

    const [ animShow, setAnimShow ] = useState(false)

    useEffect(() => {
        setAnimShow(!animShow)
    }, [])

    const techHash = {
        React: "https://cdn.worldvectorlogo.com/logos/react.svg",
        ReactNavigation: "https://reactnavigation.org/img/spiro.svg",
        Vue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png",
        Ruby: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/396px-Ruby_logo.svg.png",
        Rails: "https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png",
        Python: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/220px-Python-logo-notext.svg.png",
        Django: "https://img.stackshare.io/service/994/4aGjtNQv.png",
        Heroku: "https://s3.amazonaws.com/hackdesign/tools/app_images/000/000/037/icon_small/heroku-logo-6e6c2ed8be2ad02ac96455d53e4e7e43.png?1385326105",
        Firebase: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-512.png",
        AWS: "https://i.imgur.com/eeYUFCO.png",
        HTML: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
        CSS: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        Javascript: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    }   

    const techEntries = Object.entries(techHash)
    
    const renderTechImages = () => {
        return techEntries.map(techEntry => {
            const [tech, src] = techEntry
            return <img className="tech-used" src={src} alt={tech}/>
        })
    }

    return (
        <Animation show={animShow} animate timeout={2000}>
            {anim => (
                <>
                    <section className="bio-page-container">
                        <div className="bio-info">
                            <div className="data-block-container">
                                <div className="data-block">
                                    <p className="bio-data"><Words animate>subject_name:</Words></p> 
                                    <p className="answer"><Words animate>Thomas Bachorz</Words></p>
                                </div>
                                <div className="data-block">
                                    <p className="bio-data"><Words animate>nickname:</Words></p>
                                    <p className="answer"><Words animate>TJ</Words></p>
                                </div>
                                <div className="data-block">
                                    <p className="bio-data"><Words animate>occupation:</Words></p>
                                    <p className="answer"><Words animate>Full-Stack Software Developer</Words></p>
                                </div>
                            </div>
                            <ul>
                                <li><Words animate>Former Professional Filmmaker and Brewer</Words></li>
                                <li><Words animate>Excellent teamwork and communcation skills</Words></li>
                                <li><Words animate>Seeks to create software that improves everything from workplace efficiency, to everyday lives</Words></li>
                                <li><Words animate>Considered dangerously dependable</Words></li>
                                <li><Words animate>Subject should be approached with extreme enthusiasm</Words></li>
                            </ul>   
                            
                        </div>
                        <div className="bio-image-container">
                            <Frame
                                show={animShow}
                                animate={true}
                                level={3}
                                corners={2}
                                layer='secondary'
                            >
                                <div className="fuzzy-background">
                                    <img className="primary-img" src="https://as2.ftcdn.net/jpg/02/60/78/83/500_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg" alt="project gif"/>
                                </div>
                            </Frame>
                        </div>
                    </section>
                    <div className="techs">
                        <h6 className="tech-label"><Words animate>Skills:</Words></h6>
                        <Frame
                            show={animShow}
                            animate={true}
                            level={2}
                            corners={1}
                            layer='secondary'
                            >
                            <div className="fuzzy-background">
                                {renderTechImages()}
                            </div>
                        </Frame>
                    </div>
                </>
            )}
        </Animation>
    )
}
