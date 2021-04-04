import { useState } from 'react'
import { Toppings } from './Topping'
import { InputTopping } from './InputTopping'

import styles from './pizza.module.css'

export const Pizza = ({ data }) => {
  const { _id, svg: baseSvg, toppings, size, title } = data
  const [ config, setConfig ] = useState(toppings.reduce((config, topping) => {
    config[topping._id] = 2
    return config
  }, {}))

  const handleChangeFor = (_id) => (v) => setConfig(config => ({
    ...config,
    [_id]: v
  }))

  return (
    <section className={styles.container}>
      <figure className={styles.pizzaContainer}>
        <div className={styles.square}>
          <svg className={styles.pizza} viewBox={`0 0 ${size} ${size}`}>
            {toppings.map(({ _id: toppingId, svg }) => (
              <symbol key={toppingId} id={toppingId} dangerouslySetInnerHTML={{ __html: svg }} />
            ))}

            <g dangerouslySetInnerHTML={{ __html: baseSvg }} />
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
        <figcaption className={styles.caption}>Your {title}</figcaption>
      </figure>
      <form className={styles.form}>
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