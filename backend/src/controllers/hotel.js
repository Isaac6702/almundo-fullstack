import { search, findById, update, remove, create } from '../services/hotel'

const HotelController = {
  search (req, res, next) {
    search({ ...req.query })
      .then(req => res.json(req))
      .catch(err => next(err))
  },
  findById (req, res, next) {
    findById(req.params.id)
      .then(req => res.json(req))
      .catch(err => next(err))
  },
  update (req, res, next) {
    update({id: req.params.id, data: req.body})
      .then(req => res.json(req))
      .catch(err => next(err))
  },
  create (req, res, next) {
    create(req.body)
      .then(req => res.json(req))
      .catch(err => next(err))
  },
  remove (req, res, next) {
    remove(req.params.id)
      .then(req => res.json())
      .catch(err => next(err))
  }
}

export default HotelController
