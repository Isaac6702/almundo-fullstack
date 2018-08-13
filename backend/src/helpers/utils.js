function arrayToObjectForSelect (array) {
  return array.reduce((result, option) => {
    result[option.trim()] = true
    return result
  }, {})
}

function arrayToObjectForSort (array) {
  const { result } = array.reduce((obj, sort) => {
    let { splitResult, order, result } = obj
    splitResult = sort.trim().split(' ')
    order = splitResult[1] ? splitResult[1].trim() : 'asc'
    order = order === 'asc' ? 1 : -1
    result[splitResult[0].trim()] = order
    return obj
  }, { result: {}, order: {}, splitResult: [] })
  return result
}

const paginate = {
  limit (limit) {
    return limit ? Number(limit) : 20
  },
  page (page) {
    return (page && page > 0) ? Number(page) : 1
  },
  select (value) {
    if (!value) {
      return {}
    }
    if (typeof value === 'string') {
      const selectArray = value.split(',')
      return arrayToObjectForSelect(selectArray)
    }
    if (value instanceof Array) {
      return arrayToObjectForSelect(value)
    }
    return {}
  },
  sort (value) {
    if (!value) {
      return {}
    }
    if (typeof value === 'string') {
      const selectArray = value.split(',')
      return arrayToObjectForSort(selectArray)
    }
    if (value instanceof Array) {
      return arrayToObjectForSort(value)
    }
    return {}
  }
}

module.exports = {
  paginate
}
