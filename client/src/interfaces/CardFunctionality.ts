import { CardProps } from "./Card"

export interface ComponentThatUseCards {
    cards?: CardProps[]
    setCard: React.Dispatch<React.SetStateAction<CardProps[] | undefined>>
}