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
const mail_service_1 = require("./mail.service");
describe('mailService test', () => {
    it('sould be able to simulated send mail', () => __awaiter(void 0, void 0, void 0, function* () {
        jest.mock('fs', () => ({
            promises: {
                writeFileSync: jest.fn(),
            },
        }));
        const mailToSend = new Promise((resolve) => {
            resolve({
                name: "John Doe 2",
                email: "johndoe2@kanastra.com.br",
                value: 2000000,
                dueDate: new Date("2022-10-14"),
                barCode: 747540
            });
        });
        const expectMail = yield mailToSend.then(res => JSON.stringify(res));
        const mailService = new mail_service_1.MailService();
        const result = yield mailService.sendMail(mailToSend);
        expect(result).toStrictEqual(expectMail);
    }));
});
