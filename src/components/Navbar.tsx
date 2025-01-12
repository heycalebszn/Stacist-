import { Logo } from "../assets"
import { navLinks } from "../constants"
import { Button } from "./Button"

export const Navbar = () => {
    return(
        <nav className="flex justify-between px-[50px] pt-[20px] pb-[10px] bg-transparent bg-blur-lg items-center border-b border-gray-600 z-50">
            <img src={Logo} alt="logo" className="w-[100px]" />

            <div className="flex text-white">
            <ul className="flex gap-4">
            {navLinks.map((navLink, index) => (
                <li key={index}><a href="#" className="text-[0.7rem]">{navLink.link}</a></li>
            ))}
            </ul>
            </div>

            <div className="flex gap-4">
                <Button bgStyle={"bg-transparent"} width="100px" tag="Sign in" padding="" textSize={""} />
                <Button bgStyle={"bg-gradient-to-b from-[#] to-[#]"} width="100" tag="Sign up" padding="" textSize={""} />
            </div>
        </nav>
    )
}