export default function Inputs({
  setHooks,
  label,
  placeholder = '',
  type = 'text',
  required = true
}) {
  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(e) => {
          setHooks(e.target.value)
        }}
      />
    </label>
  )
}
