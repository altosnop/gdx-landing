import { useState } from 'react'
import HideIcon from './../../assets/hide.svg'
import ShowIcon from './../../assets/show.svg'

interface PasswordInputProps {
  value: string
  onChange: (value: string) => void
  onFocus: () => void
}

const PasswordInput = ({ value, onChange, onFocus }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState)
  }

  return (
    <div className="relative">
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        name="password"
        className={`placeholder:headline-7 h-12 w-full rounded-lg p-3 pr-12 shadow-inner outline-none placeholder:text-dark-2 ${isPasswordVisible ? 'text-black-100' : 'text-dark-1'}`}
        placeholder="Password (8+ characters)"
        value={value}
        onChange={onInputChange}
        onFocus={onFocus}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-3 flex items-center"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <img src={HideIcon} alt="Hide Icon" />
        ) : (
          <img src={ShowIcon} alt="Show Icon" />
        )}
      </button>
    </div>
  )
}

export default PasswordInput
