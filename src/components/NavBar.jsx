import burgerMenu from "../assets/images/icon-menu.svg"

export const NavBar = () => {
  return (
    <>
        <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
            <li className= " hover:text-SoftOrange cursor-pointer hover:text-[18px]">
                <a href="">Home</a>
            </li>
            <li className= " hover:text-SoftOrange cursor-pointer hover:text-[18px]">
                <a href="">Popular</a>
            </li>
            <li className= " hover:text-SoftOrange cursor-pointer hover:text-[18px]">
                <a href="">Trending</a>
            </li>
            <li className= " hover:text-SoftOrange cursor-pointer hover:text-[18px]">
                <a href="">Categories</a>
            </li>
        </ul>

        <img src={burgerMenu} alt="menu hamburguesa" className="w-10 h-4 cursor-pointer sm:hidden" />
    </>
  )
}