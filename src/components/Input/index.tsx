interface InputProps {
  value: string
  type: 'text' | 'email'
  placeholder: string
  onChange: (value: string) => void
  onFocus: () => void
}

const Input = ({ value, type, placeholder, onChange, onFocus }: InputProps) => {
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }

  return (
    <input
      type={type}
      name={type}
      className="placeholder:headline-7 w-full rounded-lg p-3 shadow-inner outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
      onFocus={onFocus}
    />
  )
}

export default Input
