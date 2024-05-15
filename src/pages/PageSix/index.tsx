const PageSix = () => {
  const showAlert = () => {
    alert('Thanks for registration')
  }

  return (
    <div className="flex h-screen w-full flex-col justify-between bg-neptune">
      <header className="header"></header>
      <div className="main-container">
        <h2 className="headline-6 mb-2 text-center text-white-100">
          Thank you for signing up!
        </h2>
        <p className="body-1 text-center text-white-100">
          Now you have access to photos of women and you can start chatting with
          them
        </p>
        <button onClick={showAlert} className="green-btn mx-auto w-[180px]">
          Search
        </button>
      </div>
      <footer className="h-[180px] w-full bg-footer"></footer>
    </div>
  )
}

export default PageSix
