import { render, screen } from '@testing-library/react'
import Calculator from '../components/Calculator'
import { clickKey } from './utils'

test('Máximo 9 dígitos y ERROR por overflow', () => {
  render(<Calculator />)
  '1234567890'.split('').forEach(clickKey)   // se trunca a 9
  expect(screen.getByText('123456789')).toBeInTheDocument()

  clickKey('+')
  '999999999'.split('').forEach(clickKey)
  clickKey('=')
  expect(screen.getByText('ERROR')).toBeInTheDocument()
})
