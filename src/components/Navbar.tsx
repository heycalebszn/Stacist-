import { Logo } from "../assets"
import { navLinks } from "../constants"
import { Button } from "./Button"

export const Navbar = () => {
    return(
        <nav className="flex justify-between px-[50px] py-[16px] bg-transparent bg-blur-lg items-center border-b border-gray-700 z-50">
            <img src={Logo} alt="logo" className="w-[80px]" />

            <div className="flex text-white">
            <ul className="flex gap-4">
            {navLinks.map((navLink, index) => (
                <li key={index}><a href="#" className="text-[0.8rem]">{navLink.link}</a></li>
            ))}
            </ul>
            </div>

            <div className="flex gap-4">
                <Button bgStyle={"bg-transparent"} width="100px" tag="Sign in" padding="" textSize={""} />
                <Button bgStyle={"bg-red-500"} width="100" tag="Sign up" padding="" textSize={""} />
            </div>
        </nav>
    )
}