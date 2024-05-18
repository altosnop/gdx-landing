import FacebookIcon from './../../assets/facebook.svg'

const PageSection = () => {
  return (
    <>
      <header className="header"></header>
      <div className="main-container">
        <a
          className="button-1 mt-[-10px] flex w-full items-center justify-center rounded bg-white-100 py-3 text-facebook transition-all hover:bg-white-100/80 focus:bg-white-100/80"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <img src={FacebookIcon} alt="Facebook Icon" className="mr-2" />
          Continue with Facebook
        </a>
        <span className="tag my-4 flex justify-center uppercase text-dark-3">
          OR
        </span>
      </div>
    </>
  )
}

export default PageSection
