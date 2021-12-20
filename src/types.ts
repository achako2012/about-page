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
    type: string;
    message: string;
}

export enum ToastType {
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

export enum ToastPosition {
    TopRight = 'top-right',
    TopLeft = 'top-left',
    TopMiddle = 'top-middle',
    BottomLeft = 'bottom-left',
    BottomRight = 'bottom-right',
    BottomMiddle = 'bottom-middle'
}
