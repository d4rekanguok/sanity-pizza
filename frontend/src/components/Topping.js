import { Spring, config } from 'react-spring/renderprops'
import { generateInRange, distributeRandomPoints } from '../utils/math'
import styles from './topping.module.css'

export const UseTopping = ({ size, toppingId, x, y, i, rotation, scale }) => {
  return (
    <Spring
      from={{ y: y - 40, opacity: 0, rotation: 0 }}
      to={{ y, opacity: 1, rotation }}
      delay={i * 15}
      config={config.wobbly}
    >
      {props => <use
        className={styles.topping}
        xlinkHref={`#${toppingId}`}
        opacity={props.opacity}
        transform={`
          translate(${x}, ${props.y})
          scale(${scale})
          rotate(${props.rotation})
        `}
      />}
    </Spring>
  )
}

export const Toppings = ({ amount, toppingId, size, toppingSize }) => {
  const offset = generateInRange(0, 10)
  return distributeRandomPoints(amount, size, offset).map(({ x, y }, i) => {
    const rotation = generateInRange(0, 360)
    const scale = generateInRange(8, 10) / 10
    return (
      <UseTopping 
        key={`${toppingId}-${i}-${rotation}`}
        i={i}
        toppingId={toppingId}
        size={size}
        x={x - toppingSize/2}
        y={y - toppingSize/2}
        rotation={rotation}
        scale={scale}
      />
  )})
}