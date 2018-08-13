/* eslint-disable */

import Mongoose from 'mongoose'
import assert from 'assert'

import { search } from '../services/hotel'
import config from '../config'

Mongoose.Promise = Promise

describe('searched for hotels service', () => {
  before(done => {
    /*** database connection ***/
    const { mongo } = config.db
    Mongoose.connect(mongo, { useMongoClient: true })
    done()
  })

  after((done) => {
    /*** database closed ***/
    Mongoose.connection.db.dropDatabase((err) => {
      Mongoose.connection.close()
      done(err)
    })
  })

  describe('searched for hotels logic', () => {
    it('should exist', () => {
      assert.ok(search)
    })

    it('Should be a function to search', () => {
      assert.equal('function', typeof search)
    })

    it('Result search', (done) => {
      const query = {
        name: 'casa'
      }
      search(query).then(results => {
        const count = results.docs.length
        assert.equal(10, count)
        done()
      }).catch(error => {
        done(error)
      })
    })
  })
})
