import { RiMenu2Line } from "react-icons/ri"
import { Logo } from "../assets"
import { navLinks } from "../constants"
import { Button } from "./Button"
import { useState } from "react"

export const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleNavToggle = () => {
        setOpenNav(true)
    }
    return(
        <nav className="flex justify-between px-[50px] py-[16px] bg-transparent bg-blur-lg items-center border-b border-[#161627] z-50 w-full relative">
            <img src={Logo} alt="logo" className="md:w-[80px] w-[100px]" />
            <div className="flex md:hidden">
            <RiMenu2Line className="text-[25px] text-white cursor pointer" onClick={handleNavToggle}/>
            </div>
            <div className={`"md:flex text-white hidden" ${openNav ? "flex flex-col bg-gray-800 rounded-[12px] h-[150px] w-fit px-[100px] absolute top-0 right-0" : "hidden"}`}>
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
