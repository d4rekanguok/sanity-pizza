import { generateInRange, distributeRandomPoints } from '../utils/math'
import styles from './topping.module.css'

export const UseTopping = ({ size, toppingId, x, y }) => {
  const rotation = generateInRange(0, 360)
  return (
    <use
      className={styles.topping}
      xlinkHref={`#${toppingId}`}
      transform={`
        translate(${x}, ${y})
        rotate(${rotation})
      `}
    />
  )
}

export const Toppings = ({ amount, toppingId, size, toppingSize }) => {
  const offset = generateInRange(0, 10)
  return distributeRandomPoints(amount, size, offset).map(({ x, y }, i) => (
    <UseTopping 
      key={`${toppingId}-${i}`}
      toppingId={toppingId}
      size={size}
      x={x - toppingSize/2}
      y={y - toppingSize/2}
    />
  ))
}