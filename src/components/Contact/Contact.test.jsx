import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import Contact from './Contact'

vi.mock('framer-motion', () => ({
  motion: { div: ({ children, ...p }) => <div {...p}>{children}</div> },
}))

test('renders Name, Email, Message fields and submit button', () => {
  render(<Contact />)
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
})

test('renders social links for LinkedIn, GitHub, Medium', () => {
  render(<Contact />)
  expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /medium/i })).toBeInTheDocument()
})

test('renders resume download link, not email address', () => {
  render(<Contact />)
  expect(screen.getByRole('link', { name: /download resume/i })).toBeInTheDocument()
  expect(screen.queryByText(/tjbachorz@gmail\.com/i)).not.toBeInTheDocument()
})

test('shows success message after successful form submission', async () => {
  global.fetch = vi.fn().mockResolvedValue({ ok: true })
  render(<Contact />)

  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { name: 'name', value: 'Test User' },
  })
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { name: 'email', value: 'test@example.com' },
  })
  fireEvent.change(screen.getByLabelText(/message/i), {
    target: { name: 'message', value: 'Hello!' },
  })
  fireEvent.click(screen.getByRole('button', { name: /send message/i }))

  await waitFor(() => {
    expect(screen.getByText(/message sent/i)).toBeInTheDocument()
  })
})

test('shows error message when submission fails', async () => {
  global.fetch = vi.fn().mockResolvedValue({ ok: false })
  render(<Contact />)

  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { name: 'name', value: 'Test User' },
  })
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { name: 'email', value: 'test@example.com' },
  })
  fireEvent.change(screen.getByLabelText(/message/i), {
    target: { name: 'message', value: 'Hello!' },
  })
  fireEvent.click(screen.getByRole('button', { name: /send message/i }))

  await waitFor(() => {
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })
})
