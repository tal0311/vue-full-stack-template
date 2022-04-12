const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getTasks, getTaskById, addTask, updateTask, removeTask } = require('./task.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getTasks)
router.get('/:id', getTaskById)
router.post('/', addTask)
router.put('/:id', updateTask)
router.delete('/:id', removeTask)
// router.post('/', requireAuth, requireAdmin, addTask)
// router.put('/:id', requireAuth, requireAdmin, updateTask)
// router.delete('/:id', requireAuth, requireAdmin, removeTask)

module.exports = router
