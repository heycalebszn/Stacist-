import { companies } from "../constants"

export const Companies = () => {
    return(
        <div className="flex gap-10 items-center justify-center">
            {companies.map((company, index) => (
                <img key={index} src={company.image} alt="company" className="md:w-[100px] w-[50px]" />
            ))}
        </div>
    )
}