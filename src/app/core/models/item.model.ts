export type FilterList = 'all' | 'pending' | 'completed';

export interface Item {
    completed: boolean;
    id: string;
    title: string;
    editMode: boolean;
    
}

export interface CreateItemDto {
    completed:Item['completed'];
    id: Item['id'];
    title: Item['title'];
    editMode: Item['editMode']
}


export interface UpdateItemDto {
    id: Item['id'];
    title: Item['title'];
}


