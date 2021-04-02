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
      <div>
        <h1>Oops, something's wrong.</h1>
        <pre>{JSON.stringify(data, null, 1)}</pre>
      </div>
    )
  }

  if (status === statusName.loading) {
    return (
      <div>We're getting there</div>
    )
  }

  return (
    <ul className={styles.pizzaList}>
      {data.map(pizza => (
        <li className={styles.pizzaListItem} key={pizza._id}>
          <Pizza data={pizza} />
        </li>
      ))}
    </ul>
  );
}

export default App;
