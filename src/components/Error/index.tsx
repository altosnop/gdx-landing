import ErrorIcon from './../../assets/error.svg'

interface ErrorProps {
  error: string
  style?: 'items-start' | 'items-center'
}

const Error = ({ error, style = 'items-center' }: ErrorProps) => {
  return (
    <div className={`mt-1 flex ${style}`}>
      <img
        className="ml-3 mr-1.5"
        src={ErrorIcon}
        alt="Error Icon"
        width={12}
        height={12}
      />
      <span className="strong-caption text-earth">{error}</span>
    </div>
  )
}

export default Error
