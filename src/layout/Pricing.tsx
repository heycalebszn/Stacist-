import { BiCheck } from "react-icons/bi"
import { Button } from "../components/Button"
import Top from "../components/Top"
import { pricingPlans } from "../constants"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "motion/react"
import { FaPlus } from "react-icons/fa"

const Pricing = () => {
  return (
    <section className="text-white flex flex-col relative z-20 items-center justify-center">
        <div className="flex flex-col justify-center items-center">
        <Top tag={"Choose Your Plan"} />
        <h1 className="md:text-[2rem] font-bold text-center pb-[20px] text-[1.4rem]">Choose the Perfect Plan for You</h1>
        <p className="text-gray-400 md:text-[1.2rem] md:w-[880px] text-[0.8rem] w-full">Get Started for Free and Enjoy Advanced Features with Premium Plans Starting at Just $10.99/Month</p>
        </div>

        <motion.div className="flex md:flex-row gap-4 mt-[50px] flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 1, ease: "easeInOut"}}
        >
            {pricingPlans.map((pricingPlan, index) => (
                <div className="flex flex-col even:border even:border-[#0037F8] rounded-[12px] text-left w-[280px] h-[400px] p-[20px] odd:border odd:border-[#0C0C68BD]" key={index}>
                    <span className="">{pricingPlan.trend}</span>
                    <p className="text-gray-500 text-[0.8rem] pb-[10px]">{pricingPlan.toolType}</p>
                    <h1 className="text-[1.5rem] font-semibold">${pricingPlan.price}<span className="text-gray-600 text-[1rem]">/Mo</span></h1>
                    <div className={`flex gap-2 items-center justify-center rounded-md py-[10px] odd:bg-gradient-to-b odd:from-[#01011F] odd:to-[#111154] w-full mt-[15px] ${pricingPlan.buttongradient ? "bg-gradient-to-r from-[#00BDFF] to-[#0037F8]" : "bg-gradient-to-b from-[#01011F] to-[#111154]"}`}>
                        <Button bgStyle={"bg-transparent"} width={"250px"} tag={"Buy Now"} textSize="10px" />
                        <BsArrowRight className="bg-transparent text-[15px] text-center"/>
                    </div>
                    <span className="mt-[10px] flex items-center gap-2">{pricingPlan.plan} {pricingPlan.plus && (<FaPlus className="text-[10px]"/>)} </span>
                    <div className="flex flex-col mt-[10px]">
                            {pricingPlan.others.map((other, index) => (
                            <div className="flex gap-2 mt-[10px]" key={index}>
                            <BiCheck className="text-[20px]" />
                            <p className="text-[0.8rem] text-gray-400">{other}</p>
                            </div>
                            ))}
                    </div>
                </div>
            ))}
        </motion.div>

        
    </section>
  )
}

export default Pricing