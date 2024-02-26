import React from 'react'
import { useSpring, animated } from 'react-spring'

interface CountAnimationProps {
  finalValue: number
}

const CountAnimation: React.FC<CountAnimationProps> = ({ finalValue }) => {
  const { count } = useSpring({
    from: { count: 0 },
    to: { count: finalValue },
    config: { duration: 2000 } // Tempo da animação em milissegundos
  })

  return (
    <animated.div>
      {count.interpolate((val) => {
        const formattedValue = Math.floor(val).toLocaleString('en-US', {
          maximumFractionDigits: 2
        })
        return formattedValue
      })}
    </animated.div>
  )
}

export default CountAnimation