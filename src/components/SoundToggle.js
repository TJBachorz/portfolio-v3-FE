import React from 'react';

import soundOff from '../assets/soundOff.png';
import soundOn from '../assets/soundOn.png';

import { useAudio, useAudioUpdate } from './AudioContext';

export default function SoundToggle() {

    
    const isMuted = useAudio()
    const toggleMute = useAudioUpdate()

    const icon = () => isMuted ? soundOff : soundOn

    return (
        <div className="mute" onClick={toggleMute}>
            <img className="speaker" src={icon()} alt="speaker-icon"/>
        </div>
    )
}
