import { useState } from 'react'
import { Toppings } from './Topping'
import { InputTopping } from './InputTopping'
import { distributeRandomPoints } from '../utils/math'

import styles from './pizza.module.css'

export const Pizza = ({ data }) => {
  const { _id, svg: baseSvg, toppings, size } = data
  const [ config, setConfig ] = useState({})

  const handleChangeFor = (_id) => (v) => setConfig(config => ({
    ...config,
    [_id]: v
  }))

  return (
    <section>
      <figure>
        <div className={styles.square}>
          <svg className={styles.pizza} viewBox={`0 0 ${size} ${size}`}>
            <symbol id={_id} dangerouslySetInnerHTML={{ __html: baseSvg }} />
            {toppings.map(({ _id: toppingId, svg }) => (
              <symbol key={toppingId} id={toppingId} dangerouslySetInnerHTML={{ __html: svg }} />
            ))}

            <use xlinkHref={`#${_id}`} />
            {toppings.map(({ _id: toppingId, size: toppingSize }) => {
              const amount = config[toppingId] * 10
              return (
                <Toppings
                  amount={amount}
                  toppingId={toppingId}
                  size={size}
                  toppingSize={toppingSize}
                />
              )
            })}
          </svg>
        </div>
        <figcaption>Your Pizza</figcaption>
      </figure>
      <form>
        {toppings.map(topping => (
          <InputTopping
            key={topping._id}
            data={topping}
            pizzaId={_id}
            value={config[topping._id] || 0}
            onChange={handleChangeFor(topping._id)}
          />
        ))}
      </form>
    </section>
  )
}