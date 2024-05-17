import SearchIcon from './../../assets/magnifier.svg'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
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
          iconElement.style.transition = 'transform 0.5s ease'
        }

        setTimeout(() => {
          cardElement.classList.add('highlighted')
          cardElement.classList.remove('opacity-40')
        }, 200)

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
        return 'top-[41px] left-[50%]'
      case 2:
        return 'top-[158px] right-[5%]'
      case 3:
        return 'top-[328px] left-[8%]'
      case 4:
        return 'top-[224px] left-[17%]'
      case 5:
        return 'top-[374px] left-[29%]'
      case 6:
        return 'top-[547px] right-[20%]'
      case 7:
        return 'top-[562px] left-[5%]'
      case 8:
        return 'top-[253px] right-[-5%]'
      case 9:
        return 'top-[216px] left-[40%]'
      case 10:
        return 'top-[444px] left-[25%]'
      case 11:
        return 'top-[496px] right-[-5%]'
      case 12:
        return 'top-[392px] right-[17%]'
      case 13:
        return 'top-[106px] left-[20%]'
      case 14:
        return 'top-[430px] left-[-3%]'
      case 15:
        return 'top-[51px] right-[6%]'
      case 16:
        return 'top-[23px] left-[12%]'
      case 17:
        return 'top-[175px] left-[-5%]'
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
            className={`absolute opacity-40 transition-all ${getPositionStyles(img.id)}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PageTwo
