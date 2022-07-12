import * as fs from 'fs';
import * as path from 'path';
import { ITicket } from '../entities/ticket.entities';

class MailService {
    constructor() { }

    /**
     * disparo de email, no caso teria uma fila que iria processar a lista de emails para serem disparados com os respectivos dados
     * salvando em um txt apenas para exemplificação
     */
    async sendMail(data: Promise<ITicket>) {
        console.log('mail service - sendMail method');
        const dataToWrite = await data.then(res=> JSON.stringify(res));
        
        fs.writeFileSync(path.join(__dirname, '../../../tmp/mails/mails.txt'), dataToWrite);

        return dataToWrite;
    }
}

export { MailService };