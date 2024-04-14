"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.postTask = exports.updateTask = exports.getTask = exports.getTasks = void 0;
const error_handle_1 = require("../utils/error.handle");
const task_service_1 = require("../services/task.service");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, task_service_1.showTasks)();
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_TASKS');
    }
});
exports.getTasks = getTasks;
const getTask = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, task_service_1.showTask)(id);
        const data = response ? response : 'NOT_FOUND';
        res.send(data);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_TASK');
    }
});
exports.getTask = getTask;
const updateTask = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, task_service_1.modifyTask)(id, body);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE_TASK');
    }
});
exports.updateTask = updateTask;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseTask = yield (0, task_service_1.insertTask)(req.body);
        res.send(responseTask);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST_TASK', e);
    }
});
exports.postTask = postTask;
const deleteTask = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, task_service_1.hideTask)(id);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE_TASK');
    }
});
exports.deleteTask = deleteTask;
