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
exports.TicketService = void 0;
class TicketService {
    constructor() { }
    generateTicket(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ticket service - generateTicket method');
            const ticketData = Object.assign(Object.assign({}, data), { barCode: Math.floor(Math.random() * (1000 * 1000)) });
            return ticketData;
        });
    }
}
exports.TicketService = TicketService;
