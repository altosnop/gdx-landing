import Card1 from './../../assets/card-1.png'
import Card2 from './../../assets/card-2.png'
import Card3 from './../../assets/card-3.png'
import Card4 from './../../assets/card-4.png'
import Card5 from './../../assets/card-5.png'
import Card6 from './../../assets/card-6.png'
import Card7 from './../../assets/card-7.png'
import Card8 from './../../assets/card-8.png'
import Card9 from './../../assets/card-9.png'
import Card10 from './../../assets/card-10.png'
import Card11 from './../../assets/card-11.png'
import Card12 from './../../assets/card-12.png'
import Card13 from './../../assets/card-13.png'
import Card14 from './../../assets/card-14.png'
import Card15 from './../../assets/card-15.png'
import Card16 from './../../assets/card-16.png'
import Card17 from './../../assets/card-17.png'
import SearchIcon from './../../assets/magnifier.svg'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface ImageData {
  id: number
  url: string
  width: number
  isRef?: boolean
}

const imageData: ImageData[] = [
  {
    id: 9,
    url: Card9,
    width: 97.25,
    isRef: true,
  },
  {
    id: 1,
    url: Card1,
    width: 97.25,
    isRef: true,
  },
  {
    id: 3,
    url: Card3,
    width: 50.56,
    isRef: true,
  },
  {
    id: 10,
    url: Card10,
    width: 113.03,
    isRef: true,
  },
  {
    id: 2,
    url: Card2,
    width: 48.25,
  },
  {
    id: 4,
    url: Card4,
    width: 50.56,
  },
  {
    id: 5,
    url: Card5,
    width: 33.06,
  },
  {
    id: 6,
    url: Card6,
    width: 33.06,
  },
  {
    id: 7,
    url: Card7,
    width: 43.8,
  },
  {
    id: 8,
    url: Card8,
    width: 81.15,
  },
  {
    id: 11,
    url: Card11,
    width: 67.63,
  },
  {
    id: 12,
    url: Card12,
    width: 66.98,
  },
  {
    id: 13,
    url: Card13,
    width: 63.44,
  },
  {
    id: 14,
    url: Card14,
    width: 74.58,
  },
  {
    id: 15,
    url: Card15,
    width: 41.54,
  },
  {
    id: 16,
    url: Card16,
    width: 48.31,
  },
  {
    id: 17,
    url: Card17,
    width: 67.63,
  },
]

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
    const startAnimation = () => {
      const iconElement = iconRef.current
      const cardElements = cardRefs.current.filter(
        (_, index) => imageData[index]?.isRef,
      )

      const animateTo = (index: number) => {
        if (index >= cardElements.length) {
          navigate('/LP_3')
          return
        }

        const cardElement = cardElements[index]
        const cardRect = cardElement.getBoundingClientRect()
        const containerRect = cardElement.parentElement?.getBoundingClientRect()

        if (containerRect && iconElement) {
          const dx = cardRect.left - containerRect.left
          const dy = cardRect.top - containerRect.top

          iconElement.style.transform = `translate(${dx}px, ${dy}px)`
          iconElement.style.transition = 'transform 1s ease'
        }

        cardElement.classList.add('highlighted')
        cardElement.classList.remove('opacity-40')

        setTimeout(() => {
          cardElement.classList.remove('highlighted')
          cardElement.classList.add('opacity-40')
          animateTo(index + 1)
        }, 1000)
      }

      animateTo(0)
    }

    const timer = setTimeout(startAnimation, 1000)

    return () => clearTimeout(timer)
  }, [navigate])

  const getPositionStyles = (id: number) => {
    switch (id) {
      case 1:
        return 'top-0 left-0'
      case 2:
        return 'top-0 right-0'
      case 3:
        return 'top-[16.67%] right-[33.33%]'
      case 4:
        return 'top-[180px] left-[50px]'
      case 5:
        return 'top-[180px] right-[180px]'
      case 6:
        return 'top-[260px] left-[120px]'
      case 7:
        return 'top-[260px] right-[50px]'
      case 8:
        return 'top-[340px] right-[180px]'
      case 9:
        return 'top-[420px] left-0'
      case 10:
        return 'top-[420px] right-[120px]'
      case 11:
        return 'top-[500px] left-[180px]'
      case 12:
        return 'bottom-[100px] left-[50px]'
      case 13:
        return 'bottom-[20px] left-[120px]'
      case 14:
        return 'bottom-[100px] right-[180px]'
      case 15:
        return 'bottom-[20px] right-[50px]'
      case 16:
        return 'bottom-[180px] left-[250px]'
      case 117:
        return 'bottom-[180px] right-[120px]'
      default:
        return ''
    }
  }

  return (
    <div className="h-screen w-full bg-neptune">
      <div className="relative mx-auto grid max-w-640 grid-cols-4 gap-2">
        <img
          className="absolute z-10"
          src={SearchIcon}
          alt="Magnifier"
          ref={iconRef}
        />
        {imageData.map((img, index) => (
          <img
            key={img.id}
            src={img.url}
            width={img.width}
            ref={img.isRef ? el => handleCardRef(el, index) : null}
            className={`hover:highlighted opacity-40 transition-all ${getPositionStyles(img.id)}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PageTwo
