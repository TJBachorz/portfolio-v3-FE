import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Nav from './Nav'

vi.mock('framer-motion', () => ({ motion: { div: ({ children, ...p }) => <div {...p}>{children}</div> } }))
vi.mock('../../hooks/useSound', () => ({
  useSound: () => ({ play: vi.fn(), muted: true, toggle: vi.fn() }),
}))

test('renders TJ logo', () => {
  render(<Nav />)
  expect(screen.getByText('TJ')).toBeInTheDocument()
})

test('renders anchor links for all three sections', () => {
  render(<Nav />)
  expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
  expect(screen.getByRole('link', { name: /work/i })).toHaveAttribute('href', '#work')
  expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact')
})

test('renders sound toggle button', () => {
  render(<Nav />)
  expect(screen.getByRole('button', { name: /mute|unmute/i })).toBeInTheDocument()
})
