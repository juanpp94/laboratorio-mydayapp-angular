export interface Item {
    completed: boolean;
    id: string;
    title: string;
}

export interface CreateItemDto {
    completed:boolean;
    id: string;
    title: string
}
