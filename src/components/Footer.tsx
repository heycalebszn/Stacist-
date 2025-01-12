import { Logo } from "../assets"
import { footerFaq } from "../constants"
import { Button } from "./Button"

export const Footer = () => {
    return(
        <footer className="flex flex-col">
            <div className="flex justify-between border-b">
                <img src={Logo} alt="logo" />
                <div className="flex gap-2">
                <img src={Logo} alt="logo" />
                <img src={Logo} alt="logo" />
                <img src={Logo} alt="logo" />
                <img src={Logo} alt="logo" />
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h1>Join the Thousands Already Benefiting</h1>
                    <div className="flex gap-4">
                        <Button bgStyle={""} width={""} tag={""} />
                        <Button bgStyle={""} width={""} tag={""} />
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col">
                        <h1>FAQ</h1>
                        {footerFaq.map((faqs, index) => (
                            <p key={index}>{faqs}</p>
                    ))}
                    <div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </footer>
    )
}