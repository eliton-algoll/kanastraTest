"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_controller_1 = require("../controllers/upload.controller");
const controller = new upload_controller_1.UploadController();
const router = (0, express_1.Router)();
router.get('/', (request, response) => {
    response.status(200).json({
        success: true,
        data: {
            message: 'ok'
        }
    });
});
router.post('/', controller.store);
exports.default = router;
