import { ITicket } from './../entities/ticket.entities';
import { MailService } from './mail.service';
import * as fs from 'fs';

describe('mailService test', () => {

    it('sould be able to simulated send mail', async () => {

        jest.mock('fs', () => ({
            promises: {
                writeFileSync: jest.fn(),
            },
        }));

        const mailToSend: Promise<ITicket> = new Promise((resolve, reject) => resolve({
            name: "John Doe 2",
            email: "johndoe2@kanastra.com.br",
            value: 2000000,
            dueDate: new Date("2022-10-14"),
            barCode:747540
        }));

        const expectMail = await mailToSend.then(res => JSON.stringify(res));

        const mailService = new MailService();

        const result = await mailService.sendMail(mailToSend);

        expect(result).toStrictEqual(expectMail);
    })
});