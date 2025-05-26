import { render } from '@testing-library/react'
import Calculator from '../components/Calculator'
import { clickKey } from './utils'

test('20 % 3 da 2', () => {
  render(<Calculator />)
  ;['2', '0', '%', '3', '='].forEach(clickKey)

  const txt = document.querySelector('.display').textContent
  expect(txt).toBe('2')
})
