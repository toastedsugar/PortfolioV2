// Setting up the root level constants
const root:String = process.env.NEXT_PUBLIC_STRAPI_DOMAIN_ROOT + '/api'

export const getProjects = root + `/Projects?populate=*`
export const getImage = (id:String) => { if(process.env.NEXT_PUBLIC_STRAPI_DOMAIN_ROOT) return process.env.NEXT_PUBLIC_STRAPI_DOMAIN_ROOT + id}