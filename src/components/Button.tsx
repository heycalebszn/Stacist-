import { ButtonProps } from "../types/types"

export const Button = ({ bgStyle, width, tag }: ButtonProps) => {
    return(
        <div className={`${bgStyle} w-${[width]} rounded-lg text-white md:text-[0.8rem] cursor-pointer text-[0.6rem]`}>
            {tag}
        </div>
    )
}