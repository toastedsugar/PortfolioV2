const root = "https://sheets.googleapis.com"

export const getGooglePosts = root + `/v4/spreadsheets/${process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID}/values/Sheet1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
export const getGooglePost = (id:number) => { 
    const query = root + `/v4/spreadsheets/${process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID}/values/Sheet1!${id+1}:${id + 1}?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
    console.log(query)
    return query
}
export const getGoogleImage = ""

