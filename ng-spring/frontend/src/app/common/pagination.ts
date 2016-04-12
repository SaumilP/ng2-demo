export interface PaginationPage<T> {
    content? : Array<T>;
    last? : boolean;
    first? : boolean;
    number: number;
    size: number;
    totalPages? : number;
    itemsPerPage? : number;
    sort? : Array<PaginationPropertySort>;
}

export interface PaginationPropertySort {
    direction : string;
    property : string;
}