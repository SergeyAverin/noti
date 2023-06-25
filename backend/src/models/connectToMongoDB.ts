import mongoose, { ConnectOptions } from 'mongoose'

import dbConfig from '../../conf/db.config'


const connectToMongoDB = async () => {
  mongoose
    .connect(
      `mongodb://${dbConfig.MONGODB_USER}:${dbConfig.MONGODB_PASSWORD}@${dbConfig.MONGODB_HOST}:${dbConfig.MONGODB_PORT}/${dbConfig.MONGODB_DB_NAME}?authSource=admin`,
      { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
    )
    .catch((error) => console.log(error))
    .then(() => console.log('Mongodb connect'))
}

export default connectToMongoDB;
