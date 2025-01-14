import { RiMenu2Line } from "react-icons/ri"
import { Logo } from "../assets"
import { navLinks } from "../constants"
import { Button } from "./Button"

export const Navbar = () => {
    return(
        <nav className="flex justify-between px-[50px] py-[16px] bg-transparent bg-blur-lg items-center border-b border-[#161627] z-50 w-full">
            <img src={Logo} alt="logo" className="w-[80px]" />
            <div className="flex md:hidden">
            <RiMenu2Line className="text-[25px] text-white"/>
            </div>
            <div className="md:flex text-white hidden">
            <ul className="flex gap-4">
            {navLinks.map((navLink, index) => (
                <li key={index}><a href="#" className="text-[0.8rem]">{navLink.link}</a></li>
            ))}
            </ul>
            </div>

            <div className="md:flex gap-4 hidden items-center">
                <Button bgStyle={"bg-transparent"} width="100px" tag="Sign in" textSize={""} />
                <div className="flex items-center justify-center rounded-[12px] px-[25px] py-[8px] bg-gradient-to-b from-[#01011F] to-[#111154]">
                    <Button bgStyle={"bg-transparent"} width={""} tag={"Sign up"} textSize="" />
                </div>
            </div>
        </nav>
    )
}