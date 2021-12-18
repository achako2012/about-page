import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Toast.css';

interface ToastProps {
    toastList: any;
    position: any;
    autoDelete: any;
    dismissTime: any;
}

export const Toast: React.FC<ToastProps> = ({ toastList, position, autoDelete, dismissTime }) => {
    const [list, setList] = React.useState(toastList);

    useEffect(() => {
        setList([...toastList]);

        // eslint-disable-next-line
    }, [toastList]);

    const deleteToast = (id: any) => {
        const listItemIndex = list.findIndex((e: { id: any }) => e.id === id);
        const toastListItem = toastList.findIndex((e: { id: any }) => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, dismissTime);

        return () => {
            clearInterval(interval);
        };

        // eslint-disable-next-line
    }, [toastList, autoDelete, dismissTime, list]);

    return (
        <div className={`notification-container ${position}`}>
            {list.map(
                (
                    toast: {
                        backgroundColor: any;
                        id: any;
                        icon: string | undefined;
                        title:
                            | boolean
                            | React.ReactChild
                            | React.ReactFragment
                            | React.ReactPortal
                            | null
                            | undefined;
                        description:
                            | boolean
                            | React.ReactChild
                            | React.ReactFragment
                            | React.ReactPortal
                            | null
                            | undefined;
                    },
                    i: React.Key | null | undefined
                ) => (
                    <div
                        key={i}
                        className={`notification toast ${position}`}
                        style={{ backgroundColor: toast.backgroundColor }}
                    >
                        {/* eslint-disable-next-line react/button-has-type */}
                        <button onClick={() => deleteToast(toast.id)}>X</button>
                        <div className="notification-image">
                            <img src={toast.icon} alt="" />
                        </div>
                        <div>
                            <p className="notification-title">{toast.title}</p>
                            <p className="notification-message">{toast.description}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

Toast.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    toastList: PropTypes.array.isRequired,
    // eslint-disable-next-line react/require-default-props
    position: PropTypes.string,
    autoDelete: PropTypes.bool,
    dismissTime: PropTypes.number
};

export default Toast;
