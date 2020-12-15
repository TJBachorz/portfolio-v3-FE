import React from 'react';

import { Words, Frame, Appear } from 'arwes';
import MainContainer from './MainContainer';


export default function BioPage() {
    return (
        <div className="bio-page">
            <div className="bio-data">
                <div className="data-block">
                    <p className="bio-data"><Words animate={true}>subject_name:</Words></p> 
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
                <ul>
                    <li><Words animate>Former Professional Filmmaker and Brewer</Words></li>
                    <li><Words animate>Excellent teamwork and communcation skills</Words></li>
                    <li><Words animate>Seeks to create software that improves everything from workplace efficiency, to everyday lives</Words></li>
                    <li><Words animate>Considered dangerously dependable</Words></li>
                    <li><Words animate>Subject should be approached with extreme enthusiasm</Words></li>
                </ul>   
            </div>
            <div className="bio-image">
                <Appear animate>
                    <Frame
                        show={true}
                        animate={true}
                        level={3}
                        corners={2}
                        animTime={1000}
                        layer='primary'
                    >
                        <img src="https://as2.ftcdn.net/jpg/02/60/78/83/500_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg"/>
                    </Frame>
                </Appear>
                <h6><Words animate>Skills:</Words></h6>
            </div>
        </div>
    )
}
