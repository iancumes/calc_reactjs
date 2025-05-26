
// useCalculator.stories.jsx
import useCalculator from '../hooks/useCalculator'
import Display from '../components/Display'
import Keypad from '../components/Keypad'

function Demo () {
  const { display, press } = useCalculator()
  return (
    <>
      <Display value={display} />
      <Keypad onKey={press} />
    </>
  )
}

export default { component: Demo }
export const Playground = {}
