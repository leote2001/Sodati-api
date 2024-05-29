"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const sodaRouter_1 = require("./sodaRouter");
const express_1 = __importDefault(require("express"));
const ceratiRouter_1 = require("./ceratiRouter");
exports.app = (0, express_1.default)();
exports.app.use("/soda", sodaRouter_1.sodaRouter);
exports.app.use("/cerati", ceratiRouter_1.ceratiRouter);
//# sourceMappingURL=index.js.map