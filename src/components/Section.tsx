import { SectionProps } from "../types/types"

export const Section = ({ children }: SectionProps) => {
    return(
        <section className="flex flex-col gap-[100px]">
            {children}
        </section>
    )
}