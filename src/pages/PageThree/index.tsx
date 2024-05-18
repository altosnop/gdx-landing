import ProgressBar from '../../components/ProgressBar'
import { ROUTER_KEYS } from '../../keys'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validation from '../../utils/validation'
import Input from '../../components/Input'
import PageSection from '../../components/PageSection'
import Error from '../../components/Error'

const PageThree = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleNameChange = (value: string) => {
    setName(value)
  }

  const handleFocus = () => {
    setError(null)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nameError = validation.name(name)
    if (nameError) {
      setError(nameError)
    } else {
      localStorage.setItem('name', name)

      setError(null)
      return navigate(ROUTER_KEYS.PAGE_4)
    }
  }

  useEffect(() => {
    const storedName = localStorage.getItem('name')
    if (storedName) {
      setName(storedName)
    }
  }, [])

  return (
    <div className="h-screen w-full bg-neptune">
      <ProgressBar progress={25} />
      <PageSection />
      <div className="main-container">
        <h5 className="headline-5 mb-6 flex justify-center text-white-100">
          What is your name?
        </h5>
        <form onSubmit={onSubmit}>
          <Input
            value={name}
            type="text"
            placeholder="Your name"
            onChange={handleNameChange}
            onFocus={handleFocus}
          />
          <span className="headline-7 mt-1 inline-block text-dark-2">
            Please enter your name only
          </span>
          {error && (
            <Error error={error} style="items-start" imgStyle="mt-[3px]" />
          )}
          <button className="green-btn w-full" type="submit">
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default PageThree
