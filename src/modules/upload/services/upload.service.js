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
exports.UploadService = void 0;
const mail_service_1 = require("./mail.service");
const ticket_service_1 = require("./ticket.service");
class UploadService {
    constructor() { }
    upload(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('upload service - upload method');
            try {
                this.processCsv(data);
            }
            catch (err) {
                throw err;
            }
        });
    }
    /**
     * adicionei um timeout de 2 segundos para exemplificar um processamento em massa em background
     */
    processCsv(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('upload service - processCSV method');
            try {
                data.map(el => {
                    setTimeout(() => {
                        const ticketService = new ticket_service_1.TicketService();
                        const ticketData = {
                            name: el.name,
                            email: el.email,
                            value: el.debtAmount,
                            dueDate: el.debtDueDate,
                        };
                        const ticket = ticketService.generateTicket(ticketData);
                        this.publishMailMessage(ticket);
                    }, 2000);
                });
                return true;
            }
            catch (err) {
                throw new Error('unknow error');
            }
        });
    }
    /**
     * publica tópico para envio de emails async
     * para simular o processamento asyncrono, não acrescenta o await, para que o javascript continue o processamento
     * independente da continuidade do fluxo
     */
    publishMailMessage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('upload service - publisMailMessage method');
            setTimeout(() => {
                const mailService = new mail_service_1.MailService();
                mailService.sendMail(data);
            }, 2000);
        });
    }
}
exports.UploadService = UploadService;
