import { Logo } from "../assets"
import { navLinks } from "../constants"
import { Button } from "./Button"

export const Navbar = () => {
    return(
        <nav className="flex justify-between px-[50px] py-[16px] bg-transparent bg-blur-lg items-center border-b border-[#161627] z-50 w-full">
            <img src={Logo} alt="logo" className="w-[80px]" />

            <div className="md:flex text-white hidden">
            <ul className="flex gap-4">
            {navLinks.map((navLink, index) => (
                <li key={index}><a href="#" className="text-[0.8rem]">{navLink.link}</a></li>
            ))}
            </ul>
            </div>

            <div className="md:flex gap-4 hidden">
                <Button bgStyle={"bg-transparent"} width="100px" tag="Sign in" textSize={""} />
                <Button bgStyle={"bg-gradient fron-[#01011F] to-[#111154] w-[164px] h-[45px]"} width="100" tag="Sign up" textSize={""} />
            </div>
        </nav>
    )
}