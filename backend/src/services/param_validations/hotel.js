import Joi from 'joi'

export default {
  search: {
    query: {
      name: Joi.string(),
      stars: Joi.number().max(5)
    }
  },
  findById: {
    params: {
      id: Joi.string().required()
    }
  },
  update: {
    params: {
      id: Joi.string().required()
    },
    body: {
      name: Joi.string().required(),
      price: Joi.number().required(),
      image: Joi.string(),
      amenities: Joi.array().items(Joi.string())
    }
  },
  create: {
    body: {
      name: Joi.string().required(),
      price: Joi.number().required(),
      image: Joi.string(),
      amenities: Joi.array().items(Joi.string())
    }
  },
  remove: {
    params: {
      id: Joi.string().required()
    }
  }
}
