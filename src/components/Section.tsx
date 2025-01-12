import { SectionProps } from "../types/types"

export const Section = ({ children }: SectionProps) => {
    return(
        <section className="flex flex-col gap-[150px] items-center justify-center m-auto w-full text-center">
            {children}
        </section>
    )
}