import { render, screen } from '@testing-library/react'
import Calculator from '../components/Calculator'
import { clickKey } from './utils'

test('"+/-" cuenta como carácter y respeta límite 9', () => {
  render(<Calculator />)
  '12345678'.split('').forEach(clickKey)
  clickKey('+/-') // 9.° carácter
  clickKey('9')   // debe ignorarse
  expect(screen.getByText('-12345678')).toBeInTheDocument()
})
