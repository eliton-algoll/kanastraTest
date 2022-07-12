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
const ticket_service_1 = require("./ticket.service");
describe('ticketService test', () => {
    it('sould be able do process ticket', () => __awaiter(void 0, void 0, void 0, function* () {
        const ticketService = new ticket_service_1.TicketService();
        const ticketData = {
            name: 'jhon Doe',
            email: 'johndoe@kanastra.com.br',
            value: 1000000.00,
            dueDate: new Date('2022-10-12')
        };
        const result = yield ticketService.generateTicket(ticketData);
        expect(result).toHaveProperty('barCode');
    }));
});
