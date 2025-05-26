// src/components/Keypad.jsx
import Button from './Button'
const KEYS = [
  ['C', ''  ],['7', '8', '9', '/'], ['4', '5', '6', '*'], ['1', '2', '3', '-'], ['0', '.', '+/-', '+'],['%','', '=']]
const OPS = ['+', '-', '*', '/', '%', '+/-']
export default function Keypad ({ onKey }) {
  return (
    <div className='keypad'>
      {KEYS.flat().map(k => (
        <Button
          key={k}
          label={k}
          onClick={onKey}
          {...(k === '='
            ? { 'data-eq': true }
            : OPS.includes(k) ? { 'data-op': true } : {})}
        />
      ))} </div>
)
}
