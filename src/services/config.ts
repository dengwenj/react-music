const devBaseURL: string = 'http://123.207.32.32:9002'
const proBaseURL: string = 'http://123.207.32.32:9001'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 10000