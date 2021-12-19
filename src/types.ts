export interface Article {
    _id: string;
    title: string;
    subTitle: string;
    thumbnail: string;
    color: string;
    entity: string;
    date?: string;
    html: string;
}

export interface ToastI {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
}
