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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideTask = exports.modifyTask = exports.showTask = exports.showTasks = exports.insertTask = void 0;
const task_model_1 = __importDefault(require("../models/task.model"));
const insertTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("tarea recibida:", task);
    try {
        const responseInsert = yield task_model_1.default.create(task);
        return responseInsert;
    }
    catch (error) {
        console.error("error al crear la tarea:", error);
        throw error;
    }
});
exports.insertTask = insertTask;
const showTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseTask = yield task_model_1.default.find({});
    return responseTask;
});
exports.showTasks = showTasks;
const showTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseTask = yield task_model_1.default.findOne({ _id: id });
    return responseTask;
});
exports.showTask = showTask;
const modifyTask = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responseTask = yield task_model_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true
    });
    return responseTask;
});
exports.modifyTask = modifyTask;
const hideTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseTask = yield task_model_1.default.deleteOne({ _id: id });
    return responseTask;
});
exports.hideTask = hideTask;
