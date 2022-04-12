const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
  remove,
  query,
  getById,
  add,
  update,
}

async function query(filterBy) {
  try {
    // const criteria = _buildCriteria(filterBy)
    const criteria = {}

    const collection = await dbService.getCollection('task')
    var tasks = await collection.find(criteria).toArray()
    return tasks
  } catch (err) {
    logger.error('cannot find tasks', err)
    throw err
  }
}

async function getById(taskId) {
  try {
    const collection = await dbService.getCollection('task')
    const task = collection.findOne({ _id: ObjectId(taskId) })
    return task
  } catch (err) {
    logger.error(`while finding task ${taskId}`, err)
    throw err
  }
}

async function remove(taskId) {
  try {
    const collection = await dbService.getCollection('task')
    const removedId = await collection.deleteOne({ _id: ObjectId(taskId) })
    return removedId
  } catch (err) {
    logger.error(`cannot remove task ${taskId}`, err)
    throw err
  }
}

async function add(task) {
  try {
    const collection = await dbService.getCollection('task')
    const addedTask = await collection.insertOne(task)
    return addedTask
  } catch (err) {
    logger.error('cannot insert task', err)
    throw err
  }
}

async function update(task) {
  try {
    var id = ObjectId(task._id)
    delete task._id
    console.log(task)
    const collection = await dbService.getCollection('task')
    const updatedTask = await collection.updateOne(
      { _id: id },
      { $set: { ...task } }
    )
    // console.log('updatedTask:', updatedTask)
    return updatedTask
  } catch (err) {
    logger.error(`cannot update task ${task._id}`, err)
    throw err
  }
}

function _buildCriteria(filterBy) {
  const criteria = {}

  // by name
  const regex = new RegExp(filterBy.name, 'i')
  criteria.name = { $regex: regex }

  // filter by inStock
  if (filterBy.inStock) {
    criteria.inStock = { $eq: JSON.parse(filterBy.inStock) }
  }

  // filter by labels
  if (filterBy.labels?.length) {
    criteria.labels = { $in: filterBy.labels }
  }

  return criteria
}
