import { render, screen } from '@testing-library/react'
import Badge from 'components/Badge'

describe('Badge', () => {
  it('renders a badge', () => {
    render(<Badge color="red" text="hello" />)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })
})
