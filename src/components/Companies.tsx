import { companies } from "../constants"

export const Companies = () => {
    return(
        <div className="md:flex hidden gap-[100px] items-center justify-center w-full">
            {companies.map((company, index) => (
                <img key={index} src={company.image} alt="company" className="md:w-[100px] w-[50px]" />
            ))}
        </div>
    )
}