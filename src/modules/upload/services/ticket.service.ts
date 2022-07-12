import { ITicket, ITicketDto } from "../entities/ticket.entities";

class TicketService {
    constructor() { }

    async generateTicket(data: ITicketDto) {
        console.log('ticket service - generateTicket method');
        const ticketData = {
            ...data,
            barCode: Math.floor(Math.random() * (1000 * 1000)),
        };

        return ticketData;
    }
}

export { TicketService }