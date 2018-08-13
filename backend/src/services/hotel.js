import Hotel from '../models/hotel'
import { paginate } from '../helpers/utils'
import { BadRequestException } from '../helpers/exception'

export async function search (params) {
  const { name, stars, page: pageReq, limit: limitReq, sort: sortReq, select: selectReq } = params
  const query = {}
  const page = paginate.page(pageReq)
  const limit = paginate.limit(limitReq)
  const sort = sortReq ? paginate.sort(sortReq) : { stars: 1, name: 1 }
  const select = paginate.select(selectReq)
  if (name) {
    query.name = {
      $regex: new RegExp(name.toLowerCase(), 'i')
    }
  }
  if (stars) {
    query.stars = stars
  }
  const results = await Hotel.paginate(query, {
    sort,
    select,
    page,
    limit
  })
  return results
}

export function findById (id) {
  return Hotel.findById(id)
}

export function create (data) {
  const hotel = new Hotel(data)
  return hotel.save()
}

export async function update (params) {
  const { id, data } = params
  const hotel = Hotel.findById(id)
  if (!hotel) {
    throw new BadRequestException('hotel not found')
  }
  await hotel.update(data)
  return data
}

export function remove (id) {
  const hotel = Hotel.findById(id)
  return hotel.remove()
}
