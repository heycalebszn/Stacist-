import { Logo } from "../assets"
import { navLinks } from "../constants"
import { Button } from "./Button"

export const Navbar = () => {
    return(
        <nav className="flex justify-between px-[50px] py-[30px] bg-transparent blur-lg">
            <img src={Logo} alt="logo" />

            <div className="flex text-white">
            <ul className="flex gap-4">
            {navLinks.map((navLink, index) => (
                <li key={index}><a href="#" className="text-[0.7rem]">{navLink.link}</a></li>
            ))}
            </ul>
            </div>

            <div className="flex gap-4">
                <Button bgStyle={"bg-transparent"} />
                <Button bgStyle={"bg-gradient-to-b from-[#] to-[#]"} />
            </div>
        </nav>
    )
}