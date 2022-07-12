"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const upload_service_1 = require("./upload.service");
describe('UploadService test', () => {
    it('should be able to process upload in background', () => {
        const requestData = [
            {
                name: "John Doe",
                governmentId: 11111111111,
                email: "johndoe@kanastra.com.br",
                debtAmount: 1000000.00,
                debtDueDate: new Date("2022-10-12"),
                debtId: 8291
            },
        ];
        const uploadService = new upload_service_1.UploadService();
        const spy = jest.spyOn(uploadService, 'processCsv').mockImplementation(() => new Promise((resolve) => { resolve(true); }));
        uploadService.upload(requestData);
        expect(spy).toBeCalledTimes(1);
    });
});
