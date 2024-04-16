"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'done'],
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const TaskModel = (0, mongoose_1.model)('task-list', TaskSchema);
exports.default = TaskModel;
