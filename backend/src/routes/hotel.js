import express from 'express'
import validate from 'express-validation'

import Hotel from '../controllers/hotel'
import HotelValidator from '../services/param_validations/hotel'

const router = express.Router()

/**
 * @swagger
 * /api/v1/hotels/search:
 *   get:
 *     tags:
 *       - Hotel
 *     description: Find hotels
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: name of the hotel
 *         in: query
 *         type: string
 *       - name: stars
 *         description: number of stars
 *         in: query
 *         type: integer
 *       - name: page
 *         description: page number
 *         in: query
 *         required: false
 *         type: integer
 *       - name: limit
 *         description: maximum number of objects per page
 *         in: query
 *         required: false
 *         type: integer
 *       - name: select
 *         description: names of the desired fields of the object, separated by a comma. Example name, starts
 *         in: query
 *         required: false
 *         type: string
 *       - name: sort
 *         description: name of the field that you want to order. Example name asc
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *      200:
 *        description: list of hotels
 */
router.route('/v1/hotels/search').get(validate(HotelValidator.search), Hotel.search)

/**
 * @swagger
 * /api/v1/hotels/{id}:
 *   get:
 *     tags:
 *       - Hotel
 *     description: find hotel by its id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: hotel id
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *      200:
 *        description: hotel
 */
router.route('/v1/hotels/:id').get(validate(HotelValidator.findById), Hotel.findById)

/**
 * @swagger
 * /api/v1/hotels:
 *   post:
 *     tags:
 *       - Hotel
 *     description: create hotel
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: hotel
 *         in: body
 *         required: true
 *         description: hotel object
 *         schema:
 *           $ref: '#/definitions/Hotel'
 *     responses:
 *      200:
 *        description: hotel
 */
router.route('/v1/hotels').post(validate(HotelValidator.create), Hotel.create)

/**
 * @swagger
 * /api/v1/hotels/{id}:
 *   put:
 *     tags:
 *       - Hotel
 *     description: update hotel
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: hotel id
 *         in: path
 *         type: string
 *         required: true
 *       - name: hotel
 *         in: body
 *         required: true
 *         description: hotel object
 *         schema:
 *           $ref: '#/definitions/Hotel'
 *     responses:
 *      200:
 *        description: hotel
 */
router.route('/v1/hotels/:id').put(validate(HotelValidator.update), Hotel.update)

/**
 * @swagger
 * /api/v1/hotels/{id}:
 *   delete:
 *     tags:
 *       - Hotel
 *     description: remove hotel
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: hotel id
 *         in: path
 *         type: string
 *         required: true
 *     responses:
 *      200:
 *        description: ok
 */
router.route('/v1/hotels/:id').delete(validate(HotelValidator.remove), Hotel.remove)

export default router
