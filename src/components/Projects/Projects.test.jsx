import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Projects from './Projects'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...p }) => <div {...p}>{children}</div>,
  },
}))

test('renders all four project names', () => {
  render(<Projects />)
  expect(screen.getByText('Looksy')).toBeInTheDocument()
  expect(screen.getByText('Epic Beer Run')).toBeInTheDocument()
  expect(screen.getByText('ABC Data Logger')).toBeInTheDocument()
  expect(screen.getByText('Outdoor.sy')).toBeInTheDocument()
})

test('Looksy card has Featured badge', () => {
  render(<Projects />)
  expect(screen.getByText('Featured')).toBeInTheDocument()
})

test('all project links open in new tab', () => {
  render(<Projects />)
  const externalLinks = screen.getAllByRole('link').filter(
    l => l.getAttribute('target') === '_blank'
  )
  expect(externalLinks.length).toBeGreaterThan(0)
})
