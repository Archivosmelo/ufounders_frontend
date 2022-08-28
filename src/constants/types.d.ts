
export interface Client {
    _id: string;
    ticket: number;
    present: boolean;
    firstName: string;
    lastName: string;
}

export interface ClientDetails extends Client {
    present: boolean;
    birthdate: string;
    email: string;
    phone: string;
    address: string;
}

export interface User {
    username: string,
    email: string,
}