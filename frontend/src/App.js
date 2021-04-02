import { useData, statusName } from './useData'
import { Pizza } from './components/Pizza'
import groq from 'groq'


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
    <ul>
      {data.map(pizza => (
        <li key={pizza._id} style={{ width: 300 }}>
          <Pizza data={pizza} />
        </li>
      ))}
    </ul>
  );
}

export default App;
