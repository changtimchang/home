export const SERVER_URL = 
    process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
export const APP_NAME = 
    process.env.NEXT_PUBLIC_APP_NAME || 'NextAdmin'
export const APP_DESCRIPTIONL = 
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'An modern dashboard built with Next.js, Postgres, Shadn'
export const ITEMS_PER_PAGE = 
    Number(process.env.ITEMS_PER_PAGE) || 5