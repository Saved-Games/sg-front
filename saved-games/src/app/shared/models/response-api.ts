import { Pageable } from './pageable';

export class ResponseAPI<T> {
    status: number;
    message: string;
    body: T;
    pageable: Pageable;

    constructor($status: number, $message: string, $body: T, $pageable: Pageable) {
        this.status = $status;
        this.message = $message;
        this.body = $body;
        this.pageable = $pageable;
    }
}