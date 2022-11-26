/**
 * Get all the data from the DataBase
 * @param url 
 * @returns Fetch Promise
 */
export const getAll = async (url: string) => await fetch(url)

/**
 * Save new data to de DataBase
 * @param url 
 * @param body 
 * @returns Fetch Promise
 */
export const saveData = async (url: string, body: string) => await fetch(url, {
    method: "POST",
    body
})

/**
 * Update existing data on the DataBase
 * @param url 
 * @param body 
 * @returns 
 */
export const updateData = async (url: string, body: string) => await fetch(url, {
    method: "POST",
    body
})

/**
 * Delete data existing on the DataBase
 * @param url 
 * @param body 
 * @returns 
 */
export const deleteData = async (url :string, body: string) => await fetch(url, {
    method: "POST",
    body
})