import { BiCheck } from "react-icons/bi"
import { Button } from "../components/Button"
import Top from "../components/Top"
import { pricingPlans } from "../constants"
import { BsArrowRight } from "react-icons/bs"

const Pricing = () => {
  return (
    <section className="text-white flex flex-col relative">
        <div className="flex flex-col">
        <Top tag={"Choose Your Plan"} />
        <h1 className="text-[2rem] font-bold text-center pb-[80px]">What Our Clients Say About Us</h1>
        <p className="text-gray-700 text-[0.9rem]">Get Started for Free and Enjoy Advanced Features with Premium Plans Starting at Just $10.99/Month</p>
        </div>

        <div className="flex gap-4">
            {pricingPlans.map((pricingPlan, index) => (
                <div className="flex flex-col even:border even:border-[#0037F8]" key={index}>
                    <span>{pricingPlan.trend}</span>
                    <p>{pricingPlan.toolType}</p>
                    <h1>${pricingPlan.price}<span>/Mo</span></h1>
                    <div className="flex gap-2 items-center justify-center bg-gradient-to-r from-[#00BDFF] to-[#0037F8] mt-[30px] rounded-[12px] px-[25px] py-[10px] odd:bg-gradient odd:from-[#01011F] odd:to-[#111154] w-full">
                        <Button bgStyle={"bg-transparent"} width={"250px"} tag={"Buy Now"} textSize="10px" />
                        <BsArrowRight className="bg-transparent text-[15px] text-center"/>
                    </div>
                    <span>{pricingPlan.plan}</span>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <BiCheck className="text-[15px]" />
                            <p>{pricingPlan.others}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Pricing