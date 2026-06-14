import { useRef, useState } from 'react'

export function useSound(src) {
  const audioRef = useRef(null)
  const [muted, setMuted] = useState(true)

  function getAudio() {
    if (!audioRef.current) {
      audioRef.current = new Audio(src)
      audioRef.current.volume = 0.3
    }
    return audioRef.current
  }

  function play() {
    if (muted) return
    const audio = getAudio()
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  function toggle() {
    setMuted(m => !m)
  }

  return { play, muted, toggle }
}
