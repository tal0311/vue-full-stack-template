const logger = require('../../services/logger.service')
const taskService = require('./task.service')

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  removeTask,
}

// LIST
async function getTasks(req, res) {
  try {
    const filterBy = req.query
    const tasks = await taskService.query(filterBy)
    res.json(tasks)
  } catch (err) {
    logger.error('Failed to get tasks', err)
    res.status(500).send({ err: 'Failed to get tasks' })
  }
}

// READ
async function getTaskById(req, res) {
  try {
    const { id } = req.params
    const task = await taskService.getById(id)
    res.json(task)
  } catch (err) {
    logger.error('Failed to get task', err)
    res.status(500).send({ err: 'Failed to get task' })
  }
}

// CREATE
async function addTask(req, res) {
  try {
    const task = req.body
    const addedTask = await taskService.add(task)
    res.json(addedTask.ops[0])
  } catch (err) {
    logger.error('Failed to add task', err)
    res.status(500).send({ err: 'Failed to add task' })
  }
}

// UPDATE
async function updateTask(req, res) {
  try {
    // !makw sure to send id in body
    const task = req.body
    const updatedTask = await taskService.update(task)
    res.json(updatedTask)
  } catch (err) {
    logger.error('Failed to update task', err)
    res.status(500).send({ err: 'Failed to update task' })
  }
}

// DELETE
async function removeTask(req, res) {
  try {
    const { id } = req.params
    await taskService.remove(id)
    res.send('task with id:', id, 'has been removed')
  } catch (err) {
    logger.error('Failed to remove task', err)
    res.status(500).send({ err: 'Failed to remove task' })
  }
}
