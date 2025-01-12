import Top from "../components/Top"
import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section>
        <Top tag={"Testimonials"} />

        <div>
        <h1 className="text-[2.5rem] font-bold w-[750px]">What Our Clients Say About Us</h1>

        <div className="grid grid-cols-3">
            {testimonials.map((testimonial, index) => (
                <div className="flex flex-col bg-red-500 w-[300px] h-[100px] p-[50px] border border-gray-700" key={index}>
                    <div className="flex">
                        <img src={testimonial.profile} alt="person" />
                        <div className="flex flex-col">
                        <h1>{testimonial.username}</h1>
                        <p>{testimonial.profileAt}</p>
                        </div>
                    </div>
                    <div>
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