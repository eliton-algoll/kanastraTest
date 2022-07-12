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
exports.UploadController = void 0;
const upload_service_1 = require("../../services/upload.service");
class UploadController {
    store(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const uploadService = new upload_service_1.UploadService();
                const data = request.body;
                uploadService.upload(data);
                response.status(200).json({
                    success: true,
                    data: {
                        message: "arquivo enviado com sucesso",
                        data: data
                    }
                });
            }
            catch (err) {
                return response.status(400).json({
                    error: err
                });
            }
        });
    }
}
exports.UploadController = UploadController;
