import { motion } from "motion/react"
import Top from "../components/Top"
import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <motion.section className="flex flex-col items-center justify-center text-white"
    >
        <Top tag={"Testimonials"} />

        <div>
        <h1 className="md:text-[2.5rem] font-bold text-center md:pb-[80px] pb-[30px] text-[1.4rem]">What Our Clients Say About Us</h1>

        <motion.div className="md:grid grid-cols-3 text-white gap-x-[80px] gap-y-10 flex flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration: 1, ease: "easeInOut"}}>
            {testimonials.map((testimonial, index) => (
                <div className="flex flex-col bg-gradient-to-br from-[#030322] to-[#070725] md:w-[280px] h-[180px] p-[20px] border border-[#0A0A45] rounded-[12px] shadow-2xl w-full" key={index}>
                    <div className="flex bg-transparent">
                        <img src={testimonial.profile} alt="person" className="bg-transparent w-[45px]" />
                        <div className="flex flex-col bg-transparent items-start ml-[15px]">
                        <h1 className="bg-transparent">{testimonial.username}</h1>
                        <p className="bg-transparent text-[0.7rem]">@{testimonial.profileAt}</p>
                        </div>
                    </div>
                    <div className="bg-transparent text-[0.8rem] text-left mt-[10px] text-gray-300">
                        {testimonial.desc}
                    </div>
                </div>
            ))}
        </motion.div>
        </div>
    </motion.section>
  )
}

export default Testimonials