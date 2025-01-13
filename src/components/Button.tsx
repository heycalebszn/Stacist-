import { ButtonProps } from "../types/types"

export const Button = ({ bgStyle, width, tag }: ButtonProps) => {
    return(
        <div className={`${bgStyle} w-${[width]} rounded-lg text-white text-[0.8rem] cursor-pointer`}>
            {tag}
        </div>
    )
}