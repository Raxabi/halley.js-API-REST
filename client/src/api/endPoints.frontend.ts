/**
 * Get all the data from the DataBase
 * @param url 
 * @returns Fetch Promise
 */
export const getData = async (url: string) => await fetch(url)

/**
 * Save new data to de DataBase
 * @param url 
 * @param body 
 * @returns Fetch Promise
 */
export const saveData = async (url: string, body: object) => await fetch(url, {
    method: "POST",
    body: JSON.stringify(body)
})

/**
 * Update existing data on the DataBase
 * @param url 
 * @param body 
 * @returns Fetch Promise
 */
export const updateData = async (url: string, body: string) => await fetch(url, {
    method: "POST",
    body
})

/**
 * Delete data existing on the DataBase
 * @param url 
 * @param cardID The id of the card that want to delete
 * @returns Fetch Promise
 */
export const deleteData = async (url :string, body: string) => await fetch(url, {
    method: "POST",
    body
})

// Utils
export const getCards = async (source: string) => (
    (await getData(source)).json()
    
)