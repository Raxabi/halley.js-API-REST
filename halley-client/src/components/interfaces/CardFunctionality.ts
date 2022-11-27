import { DBResult } from "./Card"

export interface CardFunctionality {
    data?: DBResult[]
    updateDataFunction?: React.Dispatch<React.SetStateAction<never[]>>
}