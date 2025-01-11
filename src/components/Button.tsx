import { ButtonProps } from "../types/types"

export const Button = ({ bgStyle }: ButtonProps) => {
    return(
        <div className={`bg-${bgStyle} w-[100px] rounded-lg text-white`}></div>
    )
}