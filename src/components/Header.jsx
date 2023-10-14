import { NavBar } from "./NavBar"
import logo from "../assets/images/logo.svg"

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-14">
      <img src={logo} alt="logo" />
      <NavBar/>
    </header>
  )
}