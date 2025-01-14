import { SectionProps } from "../types/types"

export const Section = ({ children }: SectionProps) => {
    return(
        <section className="flex flex-col gap-[150px] items-center justify-center m-auto w-full text-center md:px-0 px-[50px]">
            {children}
        </section>
    )
}