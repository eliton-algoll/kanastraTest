import { ITicket } from './../entities/ticket.entities';
import { ITicketDto } from "../entities/ticket.entities";
import { IUploadRequestDto } from "../entities/upload.entities";
import { MailService } from "./mail.service";
import { TicketService } from "./ticket.service";

class UploadService {
    constructor() {}

    async upload(data: IUploadRequestDto[]) {
        console.log('upload service - upload method');
        try{
            this.processCsv(data);
        } catch(err) {
            throw err;
        }
    }


    /**
     * adicionei um timeout de 2 segundos para exemplificar um processamento em massa em background
     */
    async processCsv(data: IUploadRequestDto[]) {
        console.log('upload service - processCSV method');
        try{
            data.map(el => {
                setTimeout(() => {
                    const ticketService = new TicketService();

                    const ticketData = {
                        name: el.name,
                        email: el.email,
                        value: el.debtAmount,
                        dueDate: el.debtDueDate,
                    };

                    const ticket = ticketService.generateTicket(ticketData);

                    this.publishMailMessage(ticket);
                }, 2000)
            });

            return true;
        } catch (err){
            throw new Error('unknow error');
        }
    }

    /**
     * publica tópico para envio de emails async
     * para simular o processamento asyncrono, não acrescenta o await, para que o javascript continue o processamento
     * independente da continuidade do fluxo
     */
    async publishMailMessage(data: Promise<ITicket>) {
        console.log('upload service - publisMailMessage method');
        setTimeout(() => {
            const mailService = new MailService();

            mailService.sendMail(data);
        }, 2000);
    }


}

export { UploadService }