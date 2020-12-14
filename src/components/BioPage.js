import React from 'react';

import { Words, Frame } from 'arwes';


export default function BioPage() {
    return (
        <div className="bio-page">
            <div>
                <p class="bio-data"><Words>subject_name:  <span class="answer">Thomas Bachorz</span></Words></p>
                <p class="bio-data">nickname: <span class="answer">TJ</span></p>
                <p class="bio-data">occupation: <span class="answer">Full-Stack Software Developer</span></p>
                <ul>
                    <li>Former Professional Filmmaker and Brewer</li>
                    <li>Displays excellent teamwork and communcation skills</li>
                    <li>Seeks to create software that improves everything from workplace efficiency, to everyday lives.</li>
                    <li>Considered dangerously dependable</li>
                    <li>Subject should be approached with extreme enthusiasm</li>
                </ul>   
            </div>
            <div>
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
                <h6>skills</h6>
            </div>
        </div>
    )
}
