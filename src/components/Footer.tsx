import { BsArrowRight } from "react-icons/bs"
import { Logo } from "../assets"
import { footerFaq, footerProducts, footerSocials } from "../constants"
import { Button } from "./Button"

export const Footer = () => {
    return(
        <footer className="flex flex-col text-white mt-[100px] bg-gradient from-[#010114] via-[#01011C] to-[#010114] w-full">
            <div className="flex justify-between border-b border-[#161627] px-[50px] py-[16px] items-center">
                <img src={Logo} alt="logo" className="bg-transparent" />
                <div className="flex gap-2 bg-transparent">
                {footerSocials.map((fs, index) => (
                    <img key={index} src={fs.social} alt="logo" className="w-[20px] bg-transparent" />
                ))}
                </div>
            </div>

            <div className="md:flex md:flex-row justify-between px-[50px] py-[16px] flex-col">
                <div className="flex flex-col">
                    <h1 className="text-[2.5rem] font-bold w-[400px]">Join the Thousands Already Benefiting</h1>
                    <div className="flex mt-[15px] items-center gap-4">
                    <div className="flex gap-2 items-center justify-center bg-gradient-to-r from-[#00BDFF] to-[#0037F8] rounded-[12px] px-[20px] py-[10px]">
            <Button bgStyle={"bg-transparent"} width={"250px"} tag={"Get Started For free"} textSize="10px" />
            <BsArrowRight className="bg-transparent text-[15px] text-center"/>
            </div>
                        <div className="flex gap-2 items-center justify-center border border-[#00BDFF] rounded-[12px] px-[20px] py-[10px]">
                        <Button bgStyle={"bg-transparent text-[0.71rem]"} width={""} tag={"Watch Demo"} />
                        <BsArrowRight className="bg-transparent text-[15px] text-center"/>
                        </div>
                    </div>
                </div>

                <div className="md:flex md:flex-row gap-[150px] flex-col">
                    <div className="flex flex-col">
                        <h1>FAQ</h1>
                        {footerFaq.map((faqs, index) => (
                            <p key={index} className="text-[12px] text-gray-500 pt-[12px] cursor-pointer">{faqs}</p>
                    ))}
                    <div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1>Product</h1>
                        {footerProducts.map((product, index) => (
                            <p key={index} className="text-[12px] text-gray-500 pt-[12px] cursor-pointer">{product}</p>
                    ))}
                    <div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}