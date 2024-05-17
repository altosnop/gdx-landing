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

export default imageData
