export default function Select({ children, label, setHooks, required = true }) {
  return (
    <label>
      {label}
      <select
        required={required}
        onChange={(e) => {
          setHooks(e.target.value)
        }}
      >
        {children}
      </select>
    </label>
  )
}
