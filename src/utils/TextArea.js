export default function TextArea({
  setHooks,
  label,
  placeholder = '',
  type = 'text',
  required = true
}) {
  return (
    <label>
      {label}
      <textarea
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
