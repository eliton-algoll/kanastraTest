export interface ITicketBase {
    name: string;
    email: string;
    value: number;
    dueDate: Date;
}

export interface ITicketDto extends ITicketBase {}

export interface ITicket extends ITicketBase {
    barCode: number;
}