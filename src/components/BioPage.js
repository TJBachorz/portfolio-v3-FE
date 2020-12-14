import React from 'react';

import { Words, Frame } from 'arwes';


export default function BioPage() {
    return (
        <div className="bio-page">
            <div>
                <p class="bio-data"><Words timeout={1000}>Subject Name:  <span class="answer">Thomas Bachorz</span></Words></p>
                <p class="bio-data">Nickname: <span class="answer">TJ</span></p>
                <p class="bio-data">Occupation: <span class="answer">Full-Stack Software Developer</span></p>
                <ul>
                    <li>Former Professional Filmmaker and Brewer</li>
                    <li>Displays excellent teamwork and communcation skills</li>
                    <li>Considered dangerously dependable</li>
                    <li>Subject should be approached with extreme enthusiasm</li>
                </ul>   
            </div>
            <div>
                <Frame
                    show={true}
                    animate={true}
                    level={3}
                    corners={4}
                    animTime={1000}
                    layer='primary'
                >
                    <img src="https://as2.ftcdn.net/jpg/02/60/78/83/500_F_260788352_x5sSHM4DGvpjHj9wz8sFltzAPktQwJCj.jpg"/>
                </Frame>
                <h6>skills</h6>
            </div>
        </div>
    )
}
