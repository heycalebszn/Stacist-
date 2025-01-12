import { ReactNode } from "react";

export interface SectionProps {
    children: ReactNode
}

export interface ButtonProps {
    bgStyle: string
    width: string;
    tag: string
    padding?: string
    textSize?: string
}