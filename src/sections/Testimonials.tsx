import Top from "../components/Top"
import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white">
        <Top tag={"Testimonials"} />

        <div>
        <h1 className="text-[2.5rem] font-bold text-center pb-[80px]">What Our Clients Say About Us</h1>

        <div className="grid grid-cols-3 text-white gap-x-[100px] gap-y-10">
            {testimonials.map((testimonial, index) => (
                <div className="flex flex-col bg-tranparent w-[280px] h-[180px] p-[20px] border border-gray-700 rounded-[12px] shadow-2xl" key={index}>
                    <div className="flex bg-transparent">
                        <img src={testimonial.profile} alt="person" className="bg-transparent w-[45px]" />
                        <div className="flex flex-col bg-transparent items-start ml-[15px]">
                        <h1 className="bg-transparent">{testimonial.username}</h1>
                        <p className="bg-transparent text-[0.7rem]">@{testimonial.profileAt}</p>
                        </div>
                    </div>
                    <div className="bg-transparent text-[0.8rem] text-left mt-[10px]">
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