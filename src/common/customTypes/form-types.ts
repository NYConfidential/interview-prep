import { FormEvent } from "react"

export type TFormEvent = FormEvent<HTMLInputElement | HTMLTextAreaElement>

export type IInputTypes = string | string[] | number | number[] | null
