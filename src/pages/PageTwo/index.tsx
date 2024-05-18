import SearchIcon from './../../assets/magnifier.svg'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import getPositionStyles from '../../utils/getPositionStyles'
import imageData from './data'

const PageTwo = () => {
  const navigate = useNavigate()
  const cardRefs = useRef<HTMLImageElement[]>([])
  const iconRef = useRef<HTMLImageElement | null>(null)

  const handleCardRef = (ref: HTMLImageElement | null, index: number) => {
    if (ref !== null) {
      cardRefs.current[index] = ref
    }
  }

  useEffect(() => {
    const iconElement = iconRef.current
    const cardElements = cardRefs.current

    if (iconElement && cardElements.length > 0) {
      const firstCardElement = cardElements[0]
      const containerRect =
        firstCardElement.parentElement?.getBoundingClientRect()

      if (containerRect) {
        const firstCardRect = firstCardElement.getBoundingClientRect()
        const initialDx = firstCardRect.left - containerRect.left
        const initialDy = firstCardRect.top - containerRect.top

        iconElement.style.transform = `translate(${initialDx}px, ${initialDy}px)`
      }

      const animateTo = (index: number) => {
        if (index >= cardElements.length) {
          navigate('/LP_3')
          return
        }

        const cardElement = cardElements[index]
        const cardRect = cardElement.getBoundingClientRect()
        const containerRect = cardElement.parentElement?.getBoundingClientRect()

        if (containerRect) {
          const dx = cardRect.left - containerRect.left
          const dy = cardRect.top - containerRect.top

          iconElement.style.transform = `translate(${dx}px, ${dy}px)`
          iconElement.style.transition = 'transform 1s ease'
        }

        setTimeout(() => {
          cardElement.classList.add('highlighted')
          cardElement.classList.remove('opacity-40')

          setTimeout(() => {
            cardElement.classList.remove('highlighted')
            cardElement.classList.add('opacity-40')
            animateTo(index + 1)
          }, 550)
        }, 450)
      }

      animateTo(0)
    }
  }, [navigate])

  return (
    <div className="h-screen w-full overflow-x-hidden overflow-y-hidden bg-neptune">
      <div className="relative mx-auto h-full max-w-640">
        <img
          className="absolute z-10"
          src={SearchIcon}
          alt="Magnifier"
          ref={iconRef}
          width={150}
        />
        {imageData.map((img, index) => (
          <img
            key={img.id}
            src={img.url}
            width={img.width}
            ref={img.isRef ? el => handleCardRef(el, index) : null}
            className={`absolute opacity-40 transition-all ${getPositionStyles(img.id)}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PageTwo
