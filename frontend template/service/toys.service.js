import axios from 'axios'
console.log('task service')

// const TASK_URL = 'http://127.0.0.1:3030/api/task/'
const TASK_URL =
  process.env.NODE_ENV !== 'development'
    ? '/api/task'
    : '//localhost:3030/api/task/'
export const taskService = {
  query,
  getById,
  remove,
  save,
  getEmptyTask,
}

async function query(filterValue) {
  try {
    const tasks = await axios.get(TASK_URL, { params: filterValue })
    return tasks.data
  } catch (error) {
    throw new Error('error on quey FE', error)
  }
}

async function getById(id) {
  try {
    return await axios.get(TASK_URL + id).then((res) => res.data)
  } catch (error) {
    throw new Error('error on getById FE', error)
  }
}

async function remove(id) {
  try {
    return await axios.delete(`${TASK_URL}${id}/`)
  } catch (error) {
    throw new Error('error on remove Fe', error)
  }
}

async function save(task) {
  console.log(task)
  try {
    if (task._id) {
      return await axios.put(`${TASK_URL}`, task)
    }
    // const addedTask = await axios.post(`${TASK_URL}`, { ...task })
    const addedTask = await axios.post(`${TASK_URL}`, task)
    return addedTask.data
  } catch (error) {
    throw new Error('error on save fe', error)
  }
}

function getEmptyTask(title='new task',) {
  return {
    title,
    status: 'new',
    description: 'task description goes here',
    importance: 3,
    createdAt: Date.now(),
    lastTriedAt: null,
    triesCount: 0,
    doneAt: null,
    errors: [],
  }
}
