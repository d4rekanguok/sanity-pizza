export const InputTopping = ({ data, pizzaId, value, onChange }) => {
  const { _id, title, svg } = data

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
      <label htmlFor={`${pizzaId}-${_id}`}>{title}</label>
      <input
        value={value}
        onChange={handleChange}
        id={`${pizzaId}-${_id}`}
        type="range"
        min={0}
        max={4}
      />
    </div>
  )
}