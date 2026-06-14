import { render, screen } from '@testing-library/react'
import Nav from './Nav'

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
