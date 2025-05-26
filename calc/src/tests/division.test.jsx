import { render } from '@testing-library/react'
import Calculator from '../components/Calculator'
import { clickKey } from './utils'

test('22 / 7 produce string ≤ 9 caracteres', () => {
  render(<Calculator />)
  ;['2', '2', '/', '7', '='].forEach(clickKey)
  const txt = document.querySelector('.display').textContent
  expect(txt.length).toBeLessThanOrEqual(9)
})
