export class Pageable {
    page: number;
    total: number;
    limit: number;

    constructor($page: number, $total: number, $limit: number) {
        this.page = $page;
        this.total = $total;
        this.limit = $limit;
    }
}