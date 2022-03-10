import { render, screen } from '@testing-library/react'
import Badge from 'components/Badge'

describe('Badge', () => {
  it('renders a badge', () => {
    render(<Badge color="red" text="hello" />)
    const badge = screen.getByText('hello')
    expect(badge).toBeTruthy()
  })
})
