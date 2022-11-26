import { expectedObjectAPI } from "./IncomingData"

export interface CardFunctionality {
    data?: expectedObjectAPI[]
    updateData?: React.Dispatch<React.SetStateAction<never[]>>
}