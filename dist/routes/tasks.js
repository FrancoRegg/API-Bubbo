"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', task_controller_1.getTasks);
router.get('/:id', task_controller_1.getTask, log_1.logMiddleware);
router.put('/:id', task_controller_1.updateTask);
router.post('/', task_controller_1.postTask);
router.delete('/:id', task_controller_1.deleteTask);