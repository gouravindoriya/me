import logo from '/logo.png'
const Header = () => {
  return (
    <header className='h-12 md:h-18  text-black  bg-orange-400 w-full flex items-center justify-between text-sm md:text-lg  font-bold tracking-wide px-4 border-6 border-black'>
      <div>
        <img className='aspect-square  h-10' src={logo} alt="logo" />
      </div>
      <div>
        <div>
          Let's Talk
        </div>
      </div>
    </header>
  )
}

export default Header