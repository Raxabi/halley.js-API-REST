export interface CardProps {
    _id: string
    name?: string
    description?: string
    url?: string
    useButtons?: boolean
    setCard?: React.Dispatch<React.SetStateAction<CardProps[] | undefined>>
}