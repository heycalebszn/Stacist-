import { ButtonProps } from "../types/types"

export const Button = ({ bgStyle }: ButtonProps) => {
    return(
        <div className={`bg-${bgStyle}`}></div>
    )
}