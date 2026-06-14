import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Hero from './Hero'

vi.mock('framer-motion', () => ({
  motion: { div: ({ children, ...p }) => <div {...p}>{children}</div> },
}))

test('renders full name', () => {
  render(<Hero />)
  expect(screen.getByText('Thomas')).toBeInTheDocument()
  expect(screen.getByText('Bachorz')).toBeInTheDocument()
})

test('renders View my work link pointing to #work', () => {
  render(<Hero />)
  expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute('href', '#work')
})

test('renders resume download link', () => {
  render(<Hero />)
  const link = screen.getByRole('link', { name: /download resume/i })
  expect(link).toHaveAttribute('href', '/TJ_Bachorz_Resume.pdf')
  expect(link).toHaveAttribute('download')
})
