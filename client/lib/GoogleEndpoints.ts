const root = "https://sheets.googleapis.com"

export const getGooglePosts = root + `/v4/spreadsheets/${process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID}/values/Sheet1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
export const getGooglePost = (id:string) => { return root + `/v4/spreadsheets/${process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID}/values/Sheet1!${id}:${id + 1}`}
export const getGoogleImage = ""

