import { useEffect, useState } from 'react'
import PageSection from '../../components/PageSection'
import ProgressBar from '../../components/ProgressBar'
import { useNavigate } from 'react-router-dom'
import validation from '../../utils/validation'
import { ROUTER_KEYS } from '../../keys'
import PasswordInput from '../../components/PasswordInput'
import Error from '../../components/Error'

const PageFour = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onInputChange = (value: string) => {
    setPassword(value)
  }

  const handleFocus = () => {
    setError(null)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const error = validation.password(password)
    if (error) {
      setError(error)
    } else {
      console.log(password)
      localStorage.setItem('password', password)

      setError(null)

      return navigate(ROUTER_KEYS.PAGE_5)
    }
  }

  useEffect(() => {
    const storedName = localStorage.getItem('name')
    const storedPassword = localStorage.getItem('password')

    if (storedName) {
      setName(storedName)
    }
    if (storedPassword) {
      setPassword(storedPassword)
    }
  }, [])

  return (
    <div className="h-screen w-full bg-neptune">
      <ProgressBar progress={75} />
      <PageSection />
      <div className="main-container">
        <h5 className="headline-5 mb-6 flex justify-center text-center text-white-100">
          {name}, create a password
        </h5>
        <form onSubmit={onSubmit}>
          <PasswordInput
            value={password}
            onChange={onInputChange}
            onFocus={handleFocus}
          />
          {error ? (
            <Error error={error} />
          ) : (
            <span className="headline-7 mt-1 inline-block text-dark-2">
              Password must be at least 8 characters
            </span>
          )}
          <button className="green-btn w-full" type="submit">
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default PageFour
