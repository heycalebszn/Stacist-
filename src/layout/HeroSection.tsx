import { BsArrowRight } from "react-icons/bs";
import { Hero, Star } from "../assets";
import { Button } from "../components/Button";
import { Companies } from "../components/Companies";
import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <motion.header 
    className="flex items-center justify-center mt-[30px] flex-col text-center text-white -z-12 overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1, ease: "easeInOut"}}
    >
        <div className="bg-gradient-to-b from-[#000027] to-[#01011A] border py-[5px] px-[10px] text-white flex gap-2 rounded-full border-gray-800 md:my-0 my-[15px]">
            <img src={Star} alt="star" className="w-[15px] bg-transparent" />
            <h1 className="md:text-[0.9rem] text-[0.7rem] font-semibold bg-transparent">Your Workspace Perfected</h1>
        </div>

        <div className="flex flex-col relative z-12 text-center items-center justify-center">
            <h1 className="md:text-[3.5rem] font-bold md:w-[1000px] text-[1.5rem] w-full">All-in-one software to automate tasks, boost collaboration, and drive productivity</h1>

            <div className="flex gap-2 items-center justify-center m-auto bg-gradient-to-r from-[#00BDFF] to-[#0037F8] mt-[30px] rounded-[12px] px-[25px] py-[10px]">
            <Button bgStyle={"bg-transparent"} width={"250px"} tag={"Get Started For free"} textSize="10px" />
            <BsArrowRight className="bg-transparent text-[15px] text-center"/>
            </div>

            <div className="mt-[50px] flex m-auto flex-col gap-4 items-center justify-center">
                <img src={Hero} alt="hero image" className="md:w-[900px] rounded-[12px] w-[300px]" />
                <Companies />
            </div>
            {/*<img src={Ellipse} alt="ellipse" className="absolute bottom-0 left-0 right-0 m-auto z-12" />*/}
        </div>
    </motion.header>
  )
}

export default HeroSection;