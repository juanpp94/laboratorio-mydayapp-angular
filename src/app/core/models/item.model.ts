export interface Item {
    completed: boolean;
    id: string;
    title: string;
}

export interface CreateItemDto {
    title: string
}