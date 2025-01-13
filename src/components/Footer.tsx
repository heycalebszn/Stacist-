import { Logo } from "../assets"
import { footerFaq, footerProducts } from "../constants"
import { Button } from "./Button"

export const Footer = () => {
    return(
        <footer className="flex flex-col text-white mt-[100px]">
            <div className="flex justify-between border-b border-[#161627] px-[50px] py-[16px]">
                <img src={Logo} alt="logo" />
                <div className="flex gap-2">
                <img src={Logo} alt="logo" />
                <img src={Logo} alt="logo" />
                <img src={Logo} alt="logo" />
                <img src={Logo} alt="logo" />
                </div>
            </div>

            <div className="flex justify-between px-[50px] py-[16px]">
                <div className="flex flex-col">
                    <h1 className="text-[2.5rem] font-bold w-[400px]">Join the Thousands Already Benefiting</h1>
                    <div className="flex gap-4 mt-[15px]">
                        <Button bgStyle={""} width={""} tag={"Get Started for Free"} />
                        <Button bgStyle={"bg-red-500"} width={""} tag={"Watch Demo"} />
                    </div>
                </div>

                <div className="flex gap-[150px]">
                    <div className="flex flex-col">
                        <h1>FAQ</h1>
                        {footerFaq.map((faqs, index) => (
                            <p key={index} className="text-[12px] text-gray-500 pt-[10px] cursor-pointer">{faqs}</p>
                    ))}
                    <div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1>Product</h1>
                        {footerProducts.map((product, index) => (
                            <p key={index} className="text-[12px] text-gray-500 pt-[10px] cursor-pointer">{product}</p>
                    ))}
                    <div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}