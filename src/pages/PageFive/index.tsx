import { useNavigate } from 'react-router-dom'
import PageSection from '../../components/PageSection'
import ProgressBar from '../../components/ProgressBar'
import { useEffect, useState } from 'react'
import { ROUTER_KEYS } from '../../keys'
import validation from '../../utils/validation'
import Input from '../../components/Input'
import Error from '../../components/Error'

const PageFive = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onInputChange = (value: string) => {
    setEmail(value)
  }

  const handleFocus = () => {
    setError(null)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const error = validation.email(email)
    if (error) {
      setError(error)
    } else {
      console.log(email)
      localStorage.setItem('email', email)

      setError(null)

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
            onChange={onInputChange}
            onFocus={handleFocus}
          />
          {error && <Error error={error} />}
          <button className="green-btn w-full" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default PageFive
