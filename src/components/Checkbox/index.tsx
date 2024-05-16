import CheckboxIcon1 from './../../assets/checkbox_1.svg'
import CheckboxIcon2 from './../../assets/checkbox_2.svg'
import CheckboxIcon3 from './../../assets/checkbox_3.svg'

interface CheckboxProps {
  error: null | string
  checked: boolean
  onChange: (value: boolean) => void
}

const Checkbox = ({ error, checked, onChange }: CheckboxProps) => {
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked)
  }

  return (
    <div className="mt-6 flex w-full items-start">
      <div className="h-6 w-6 flex-none">
        {error ? (
          <img src={CheckboxIcon2} alt="Checkbox error" />
        ) : checked ? (
          <img src={CheckboxIcon3} alt="Checkbox checked" />
        ) : (
          <img src={CheckboxIcon1} alt="Checkbox default" />
        )}
      </div>
      <label
        htmlFor="chekbox"
        className={`style-overline ml-2 ${error ? 'text-earth' : 'text-dark-2'}`}
      >
        I accept the Terms and Conditions, I agree to the Privacy and Membership
        Policy
      </label>
      <input
        type="checkbox"
        id="chekbox"
        checked={checked}
        onChange={onInputChange}
        className="absolute opacity-0"
      />
    </div>
  )
}

export default Checkbox
