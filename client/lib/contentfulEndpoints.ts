
const root = "https://cdn.contentful.com"

export const getPosts = root + `/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=${process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_ID}`
//export const getFeaturedPosts = 
//export const getPost = 