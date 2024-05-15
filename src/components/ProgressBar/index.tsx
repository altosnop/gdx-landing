interface ProgressBarProps {
  progress: 25 | 75 | 100
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  let progressBarWidth

  switch (progress) {
    case 25:
      progressBarWidth = 'w-1/4'
      break
    case 75:
      progressBarWidth = 'w-9/12'
      break
    default:
      progressBarWidth = 'w-full'
      break
  }

  return (
    <div className="h-3 w-full bg-neptune">
      <div className={`bg-uranus h-full ${progressBarWidth}`}></div>
    </div>
  )
}

export default ProgressBar
