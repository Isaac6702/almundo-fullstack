import mongoose from 'mongoose'
import paginate from 'mongoose-paginate'
import uniqueValidator from 'mongoose-unique-validator'
import config from '../config'

const Schema = mongoose.Schema

/**
 * @swagger
 * definitions:
 *   Hotel:
 *     type: object
 *     required:
 *       - name
 *       - price
 *       - amenities
 *     properties:
 *       name:
 *         type: string
 *       price:
 *         type: number
 *       image:
 *         type: string
 *       amenities:
 *         type: array
 *         items:
 *          type: string
 */
const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true
  },
  stars: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  amenities: [{
    type: String,
    required: true,
    enum: [
      'safety-box',
      'nightclub',
      'deep-soaking-bathtub',
      'beach',
      'business-center',
      'bathtub',
      'newspaper',
      'restaurant',
      'fitness-center',
      'garden',
      'beach-pool-facilities',
      'bathrobes',
      'coffe-maker',
      'children-club',
      'separate-bredroom',
      'kitchen-facilities'
    ]
  }]
},
  {
    collection: 'hotel',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })

HotelSchema.virtual('imageUrl').get(function () {
  if (!this.image) {
    return undefined
  }
  const url = `${config.repository}/${this.image}`
  return url
})

HotelSchema.plugin(uniqueValidator)
HotelSchema.plugin(paginate)

export default mongoose.model('Hotel', HotelSchema)
