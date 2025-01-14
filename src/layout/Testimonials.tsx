import Top from "../components/Top"
import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white">
        <Top tag={"Testimonials"} />

        <div>
        <h1 className="text-[2.5rem] font-bold text-center pb-[80px]">What Our Clients Say About Us</h1>

        <div className="md:grid grid-cols-3 text-white gap-x-[80px] gap-y-10 flex flex-col items-center justify-center">
            {testimonials.map((testimonial, index) => (
                <div className="flex flex-col bg-gradient-to-br from-[#030322] to-[#070725] w-[280px] h-[180px] p-[20px] border border-[#0A0A45] rounded-[12px] shadow-2xl" key={index}>
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
        </div>
        </div>
    </section>
  )
}

export default Testimonials