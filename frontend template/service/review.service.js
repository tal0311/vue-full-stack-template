import { httpService } from './http.service'
// import { storageService } from './async-storage.service'
// import { userService } from './user.service-local'
// import { socketService, SOCKET_EVENT_REVIEW_ADDED } from './socket.service'

export const reviewService = {
  add,
  query,
  remove,
}

function query(filterBy) {
  var queryStr = !filterBy ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get(`review${queryStr}`)
}

function remove(reviewId) {
  return httpService.delete(`review/${reviewId}`)
}
async function add(review) {
  const addedReview = await httpService.post(`review`, review)

  return addedReview
}
