import React, { useState } from 'react';

import { Words } from 'arwes';

import soundOff from '../assets/soundOff.png';
import soundOn from '../assets/soundOn.png';

export const AudioContext = React.createContext()

export default function SoundToggle() {

    const [ isMuted, setIsMuted ] = useState(false)

    const icon = () => isMuted ? soundOff : soundOn

    return (
        <div className="mute" onClick={() => setIsMuted(!isMuted)}>
            <Words><img className="speaker" src={icon()} alt="speaker-icon"/>&nbsp; sound on/off</Words>
        </div>
    )
}
