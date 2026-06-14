import { renderHook, act } from '@testing-library/react'
import { useSound } from './useSound'

test('starts muted by default', () => {
  const { result } = renderHook(() => useSound('/click.mp3'))
  expect(result.current.muted).toBe(true)
})

test('toggle switches muted state', () => {
  const { result } = renderHook(() => useSound('/click.mp3'))
  act(() => { result.current.toggle() })
  expect(result.current.muted).toBe(false)
  act(() => { result.current.toggle() })
  expect(result.current.muted).toBe(true)
})

test('play does nothing when muted', () => {
  const mockPlay = vi.fn().mockResolvedValue(undefined)
  global.Audio = vi.fn(() => ({ play: mockPlay, currentTime: 0, volume: 1 }))

  const { result } = renderHook(() => useSound('/click.mp3'))
  act(() => { result.current.play() })
  expect(mockPlay).not.toHaveBeenCalled()
})

test('play calls audio.play() when unmuted', async () => {
  const mockPlay = vi.fn().mockResolvedValue(undefined)
  global.Audio = vi.fn(() => ({ play: mockPlay, currentTime: 0, volume: 1 }))

  const { result } = renderHook(() => useSound('/click.mp3'))
  act(() => { result.current.toggle() }) // unmute
  await act(async () => { result.current.play() })
  expect(mockPlay).toHaveBeenCalled()
})
