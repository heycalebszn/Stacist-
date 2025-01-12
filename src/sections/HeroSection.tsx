import { BsArrowRight } from "react-icons/bs";
import { Star } from "../assets";
import { Button } from "../components/Button";

const HeroSection = () => {
  return (
    <header className="flex items-center justify-center mt-[30px] flex-col text-center text-white z-50">
        <div className="bg-gradient from-[#000027] to-[#01011A] border py-[5px] px-[10px] text-white flex gap-2 rounded-full border-gray-500">
            <img src={Star} alt="star" className="w-[15px]" />
            <h1 className="text-[0.9rem] font-semibold">Your Workspace Perfected</h1>
        </div>

        <div className="flex flex-col relative z-50">
            <h1 className="text-[3rem] font-bold w-[900px]">All-in-one software to automate tasks, boost collaboration, and drive productivity</h1>

            <div className="flex gap-2 items-center justify-center m-auto bg-red-500 mt-[30px] rounded-[12px] px-[20px] py-[10px]">
            <Button bgStyle={"transparent"} width={"250px"} tag={"Get Started For free"} textSize="10px" />
            <BsArrowRight className="bg-transparent text-[15px] text-center"/>
            </div>
            {/*<img src={Ellipse} alt="ellipse" className="absolute bottom-0 left-0 right-0 m-auto z-12" />*/}
        </div>
    </header>
  )
}

export default HeroSection;