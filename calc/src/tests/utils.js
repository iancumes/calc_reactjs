import { fireEvent, screen } from '@testing-library/react'

export const clickKey = key =>
  fireEvent.click(screen.getByRole('button', { name: key }))
