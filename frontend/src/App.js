import { useData, statusName } from './useData'
import { Pizza } from './components/Pizza'
import groq from 'groq'

import styles from './app.module.css'

function App() {
  const { status, data } = useData('getAllPizza', groq`
    *[_type == "pizza"] {
      ...,
      toppings[] -> {
        _id,
        title,
        svg,
        size,
      }
    }
  `)

  if (status === statusName.error) {
    return (
      <main className={styles.layout}>
        <div>
          <h1>Oops, something's wrong.</h1>
          <pre>{JSON.stringify(data, null, 1)}</pre>
        </div>
      </main>
    )
  }

  if (status === statusName.loading) {
    return (
      <div className={styles.layout}>We're getting there...</div>
    )
  }

  return (
    <main>
      <ul className={styles.pizzaList + ' ' + styles.layout}>
        {data.map(pizza => (
          <li className={styles.pizzaListItem} key={pizza._id}>
            <Pizza data={pizza} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
