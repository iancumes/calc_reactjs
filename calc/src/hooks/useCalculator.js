import { useState } from 'react'
import { withinLimit, toErrorIfNeeded } from '../utils/helper.js'

export default function useCalculator () {
  const [display, setDisplay] = useState('0')
  const [acc, setAcc] = useState(null)
  const [op, setOp] = useState(null)
  const [wipe, setWipe] = useState(false) // ⬅️ NUEVO flag

  const write = txt => setDisplay(withinLimit(txt))

  const pushDigit = d => {
    write(wipe || display === '0' ? d : display + d)
    setWipe(false)
  }

  const pushDot = () => {
    if (wipe) { write('0.'); setWipe(false); return }
    if (!display.includes('.')) write(display + '.')
  }

  const toggleSign = () => write(display.startsWith('-')
    ? display.slice(1)
    : withinLimit('-' + display))

  const apply = () => {
    if (op === null) return parseFloat(display)
    return calc(acc, parseFloat(display), op)
  }

  const operate = next => {
    const result = apply()
    setAcc(result)
    setOp(next)
    write(toErrorIfNeeded(result))
    setWipe(true) // ⬅️ la próxima tecla borra
  }

  const equal = () => {
    if (op === null) return
    const result = calc(acc, parseFloat(display), op)
    write(toErrorIfNeeded(result))
    setAcc(null)
    setOp(null)
    setWipe(true)
  }

  const press = k => {
    if ('0123456789'.includes(k)) pushDigit(k)
    else if (k === '.') pushDot()
    else if (k === '+/-') toggleSign()
    else if ('+-*/%'.includes(k)) operate(k)
    else if (k === '=') equal()
    else if (k === 'C') {            // nueva tecla
    setDisplay('0')
    setAcc(null); setOp(null); setWipe(false)
    }
  }

  return { display, press }
}

const calc = (a, b, op) =>
  op === '+' ? a + b
    : op === '-' ? a - b
      : op === '*' ? a * b
        : op === '/' ? a / b
          : a % b
