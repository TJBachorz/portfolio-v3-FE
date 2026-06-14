import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import About from './About'

vi.mock('framer-motion', () => ({
  motion: { div: ({ children, ...p }) => <div {...p}>{children}</div> },
}))

test('renders bio section', () => {
  render(<About />)
  expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument()
})

test('renders headshot image with alt text', () => {
  render(<About />)
  expect(screen.getByRole('img', { name: /TJ Bachorz/i })).toBeInTheDocument()
})

test('renders all skill tags', () => {
  render(<About />)
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('Django')).toBeInTheDocument()
  expect(screen.getByText('Rails')).toBeInTheDocument()
  expect(screen.getByText('AWS')).toBeInTheDocument()
})

test('renders section-label with about text', () => {
  render(<About />)
  expect(screen.getByText(/about/i)).toBeInTheDocument()
})
