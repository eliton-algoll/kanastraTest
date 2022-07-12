import { ITicketDto } from './../entities/ticket.entities';
import { TicketService } from './ticket.service';

describe('ticketService test', () => {
    it('sould be able do process ticket', async () => {
        const ticketService = new TicketService();

        const ticketData: ITicketDto = {
            name: 'jhon Doe',
            email: 'johndoe@kanastra.com.br',
            value: 1000000.00,
            dueDate: new Date('2022-10-12')
        };

        const result = await ticketService.generateTicket(ticketData);

        expect(result).toHaveProperty('barCode');
    })
})