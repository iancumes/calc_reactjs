import { render, screen } from '@testing-library/react'
import Calculator from '../components/Calculator'
import { clickKey } from './utils'

test('Resultado negativo muestra ERROR', () => {
  render(<Calculator />)
  ;['2', '-', '3', '='].forEach(clickKey)
  expect(screen.getByText('ERROR')).toBeInTheDocument()
})
