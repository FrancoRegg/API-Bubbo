"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const mongo_1 = __importDefault(require("./config/mongo"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(routes_1.router);
(0, mongo_1.default)().then(() => console.log("Connected to the database"));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
