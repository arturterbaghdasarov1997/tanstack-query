import { ChangeEvent } from "react";

export interface IFormField {
    type: string,
    name: string,
    placeholder?: string,
    label: string,
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}