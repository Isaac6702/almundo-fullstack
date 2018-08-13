import Mongoose from 'mongoose'
import Promise from 'bluebird'

import config from '../config'

import Hotel from '../models/hotel'
import hotelData from './data/hotel'

Mongoose.Promise = Promise

async function loadData () {
  try {
    console.log(`Running seeds`)
    await Hotel.remove({})
    await Hotel.create(hotelData)

    Mongoose.connection.close()
    console.log(`The process finished`)
    process.exit()
  } catch (err) {
    console.log(`error: `, err)
  }
}

Mongoose.connect(config.db.mongo, { useMongoClient: true })
const mongo = Mongoose.connection

mongo
  .on('error', console.log)
  .once('open', loadData)
