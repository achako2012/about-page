import React from 'react';

export const AuthContext = React.createContext({
    isAuthenticated: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login: (jwtToken: string, id: string) => {},
    logout: () => {}
});

export default AuthContext;
