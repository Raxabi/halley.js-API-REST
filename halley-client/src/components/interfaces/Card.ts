export interface DBResult {
    _id: string
    name?: string
    description?: string
    url?: string
    useButtons?: boolean
    updateDataFunction?: React.Dispatch<React.SetStateAction<never[]>>
}