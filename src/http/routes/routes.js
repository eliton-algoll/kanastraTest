"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_routes_1 = __importDefault(require("../../modules/upload/http/routes/upload.routes"));
const routes = (0, express_1.Router)();
routes.use('/upload', upload_routes_1.default);
exports.default = routes;
