import React, { useEffect } from 'react';

import './Toast.css';
import { ToastI } from '../../../types';

interface ToastProps {
    toastList: any;
    autoDelete: number;
}

export const Toast: React.FC<ToastProps> = ({ toastList, autoDelete }) => {
    const [list, setList] = React.useState<ToastI[]>([]);

    const deleteToast = (id: any) => {
        const listItemIndex = list.findIndex((e: { id: any }) => e.id === id);
        const toastListItem = toastList.findIndex((e: { id: any }) => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    };

    useEffect(() => {
        const setToasts = async () => {
            if (toastList) {
                setList(toastList);
                if (autoDelete) setTimeout(() => deleteToast(toastList[0].id), autoDelete);
            }
        };

        setToasts();
    }, [toastList]);

    const renderToasts = (arr: any) =>
        arr.map((toast: any) => (
            <div key={toast.id} className="notification custom-toast">
                <button type="button" onClick={() => deleteToast(toast.id)}>
                    X
                </button>
                <div>
                    <p className="notification-title">{toast.title}</p>
                    <p className="notification-message">{toast.description}</p>
                </div>
            </div>
        ));

    const toasts = toastList ? renderToasts(toastList) : null;

    return <div className="notification-container top-right">{toasts}</div>;
};

export default Toast;
