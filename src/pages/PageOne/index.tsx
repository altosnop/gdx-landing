import { Link } from 'react-router-dom'
import { ROUTER_KEYS } from '../../keys'
import LocationIcon from './../../assets/location.svg'

const PageOne = () => {
  return (
    <div className="h-screen w-full bg-main bg-contain">
      <div className="main-container flex h-full flex-col items-center justify-center">
        <div className="mb-6 flex items-center justify-center rounded-full bg-jupiter/50 px-5 py-1 shadow-black-25">
          <img
            className="mr-1"
            src={LocationIcon}
            alt="Location Icon"
            width={16}
            height={16}
          />
          <span className="headline-6 text-white-100">Canada</span>
        </div>
        <h1 className="headline-01 text-center uppercase text-white-100">
          A large database for lonely hearts
        </h1>
        <Link
          to={ROUTER_KEYS.PAGE_2}
          className="headline-4 mt-6 box-border flex h-16 w-full items-center justify-center rounded-full border-3 border-jupiter bg-mercury uppercase text-white-100 shadow-black-50 transition-all focus:bg-mercury/80"
        >
          START
        </Link>
      </div>
    </div>
  )
}

export default PageOne
