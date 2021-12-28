import React, { useCallback } from 'react';
import { getRandomDigit } from 'helpers/utils';
import { ToastI } from '../types';

export const useNotification = () => {
    const [currentToast, setCurrentToast] = React.useState<ToastI>();

    const showToast = useCallback((type: string, message: string) => {
        const id = getRandomDigit();
        const toastProperties = {
            id,
            type,
            message
        };

        setCurrentToast(toastProperties);
    }, []);

    return {
        currentToast,
        showToast
    };
};

export default useNotification;
