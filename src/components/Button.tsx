import { ButtonProps } from "../types/types"

export const Button = ({ bgStyle, width, tag, padding }: ButtonProps) => {
    return(
        <div className={`bg-${bgStyle} w-${[width]} rounded-lg text-white p-${padding} text-[0.8rem] cursor-pointer`}>
            {tag}
        </div>
    )
}