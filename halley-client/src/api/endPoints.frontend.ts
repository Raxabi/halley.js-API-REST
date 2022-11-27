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
 * @param cardID
 * @returns Fetch Promise
 */
export const deleteData = async (url :string, cardID: string) => await fetch(url, {
    method: "POST",
    body: cardID
})