import { CorsOptions } from 'cors'

const origins = process.env.ORIGINS

const corsConfig: CorsOptions = {
  origin: origins ? origins.split(',') : 'null',
  credentials: true,
}
export default corsConfig
