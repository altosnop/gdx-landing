import { useNavigate } from 'react-router-dom'
import PageSection from '../../components/PageSection'
import ProgressBar from '../../components/ProgressBar'
import { useEffect, useState } from 'react'
import { ROUTER_KEYS } from '../../keys'
import validation from '../../utils/validation'
import Input from '../../components/Input'
import Error from '../../components/Error'
import Checkbox from '../../components/Checkbox'

const PageFive = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(false)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [checkboxError, setCheckboxError] = useState<string | null>(null)

  const handleEmailChange = (value: string) => {
    setEmail(value)
  }

  const handleCheckboxChange = (value: boolean) => {
    setCheckboxError(null)
    setChecked(value)
  }

  const handleFocus = () => {
    setEmailError(null)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const emailErr = validation.email(email)
    const checkboxErr = validation.checkbox(checked)

    emailErr ? setEmailError(emailErr) : setEmailError(null)
    checkboxErr ? setCheckboxError(checkboxErr) : setCheckboxError(null)

    if (!emailErr && !checkboxErr) {
      localStorage.setItem('email', email)
      return navigate(ROUTER_KEYS.PAGE_6)
    }
  }

  useEffect(() => {
    const storedName = localStorage.getItem('name')
    const storedEmail = localStorage.getItem('email')

    if (storedName) {
      setName(storedName)
    }
    if (storedEmail) {
      setEmail(storedEmail)
    }
  }, [])

  return (
    <div className="h-screen w-full bg-neptune">
      <ProgressBar progress={100} />
      <PageSection />
      <div className="main-container">
        <h5 className="headline-5 mb-6 flex justify-center text-center text-white-100">
          {name}, create your email
        </h5>
        <form onSubmit={onSubmit}>
          <Input
            value={email}
            type="text"
            placeholder="Your email"
            onChange={handleEmailChange}
            onFocus={handleFocus}
          />
          {emailError && <Error error={emailError} />}
          <Checkbox
            error={checkboxError}
            checked={checked}
            onChange={handleCheckboxChange}
          />
          {checkboxError && <Error error={checkboxError} />}
          <button className="green-btn w-full" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default PageFive
