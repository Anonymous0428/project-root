import {Router} from "express"
import tasksController from 'backend/controllers/tasksController.js'
const taskRouter = Router()

taskRouter.get("/", tasksController.getTask)
taskRouter.get("/:id", tasksController.getTaskById)
taskRouter.post("/", tasksController.createTask)
taskRouter.put("/:id", tasksController.updateTask)
taskRouter.delete("/:id", tasksController.deleteTask)

export default taskRouter