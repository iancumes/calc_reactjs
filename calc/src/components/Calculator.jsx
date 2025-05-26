// src/components/Calculator.jsx
import Display from './Display'
import Keypad from './Keypad'
import useCalculator from '../hooks/useCalculator'

export default function Calculator () {
  const { display, press } = useCalculator()
  return (
    <div className='calculator'>
      <Display value={display} />
      <Keypad onKey={press} />
    </div>
  )
}
