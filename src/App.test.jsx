import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import App from './App'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, initial, animate, whileInView, whileHover, transition, viewport, ...p }) => <div {...p}>{children}</div>,
  },
}))

vi.mock('./assets/tj-cropped.jpg', () => ({ default: '/tj-cropped.jpg' }))

// Nav
test('nav has TJ logo', () => {
  render(<App />)
  expect(screen.getByText('TJ', { selector: 'span' })).toBeInTheDocument()
})

test('nav links point to correct section anchors', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
  expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work')
  expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
})

// Hero
test('hero View my work CTA links to #work', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: /view my work/i })).toHaveAttribute('href', '#work')
})

test('hero resume download links to PDF with download attribute', () => {
  render(<App />)
  const resumeLinks = screen.getAllByRole('link', { name: /download resume/i })
  expect(resumeLinks[0]).toHaveAttribute('href', '/TJ_Bachorz_Resume.pdf')
  expect(resumeLinks[0]).toHaveAttribute('download')
})

// About
test('about section has headshot image', () => {
  render(<App />)
  expect(screen.getByRole('img', { name: /TJ Bachorz/i })).toBeInTheDocument()
})

// Projects
test('all four projects are present', () => {
  render(<App />)
  expect(screen.getByText('Looksy')).toBeInTheDocument()
  expect(screen.getByText('Epic Beer Run')).toBeInTheDocument()
  expect(screen.getByText('ABC Data Logger')).toBeInTheDocument()
  expect(screen.getByText('Outdoor.sy')).toBeInTheDocument()
})

test('project links open in new tab', () => {
  render(<App />)
  const newTabLinks = screen.getAllByRole('link').filter(
    l => l.getAttribute('target') === '_blank'
  )
  expect(newTabLinks.length).toBeGreaterThan(0)
})

// Contact
test('contact social links are present', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /medium/i })).toBeInTheDocument()
})

test('contact form fields are present', () => {
  render(<App />)
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
})

test('email address never appears in rendered HTML', () => {
  render(<App />)
  expect(screen.queryByText(/tjbachorz@gmail\.com/i)).not.toBeInTheDocument()
})

// Footer
test('footer is present', () => {
  render(<App />)
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
})
