import React, { useContext, useState } from 'react'; 

const AudioContext = React.createContext()
const AudioUpdateContext = React.createContext()

export const useAudio = () => {
    return useContext(AudioContext)
}

export const useAudioUpdate = () => {
    return useContext(AudioUpdateContext)
}

export function AudioProvider({ children }) {
    const [ isMuted, setIsMuted ] = useState(false)
    
    const toggleMute = () => {
        setIsMuted(muteSetting => !muteSetting)
    }
    return (
        <AudioContext.Provider value={isMuted}>
            <AudioUpdateContext.Provider value={toggleMute}>
                {children} 
            </AudioUpdateContext.Provider>
        </AudioContext.Provider>
    )
}



