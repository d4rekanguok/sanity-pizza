import styles from './inputTopping.module.css'

const valueToLabel = ['Missing', 'Mild', 'Medium', 'More!', 'MADNESS']

export const InputTopping = ({ data, pizzaId, value, onChange }) => {
  const { _id, title, svg } = data

  const inputId = `${pizzaId}-${_id}`

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className={styles.container}>
      <figure className={styles.topping} aria-label={title}>
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </figure>
      <div className={styles.inputGroup}>
        <div className={styles.labelContainer}>
          <label className={styles.label} htmlFor={inputId}>{title}</label>
          <span
            role="region"
            aria-live="polite"
            data-value={value}
            className={styles.labelValue}
          >
              {valueToLabel[value]}
          </span>
        </div>
        <input
          className={styles.input}
          value={value}
          onChange={handleChange}
          id={inputId}
          type="range"
          min={0}
          max={4}
        />
      </div>
    </div>
  )
}