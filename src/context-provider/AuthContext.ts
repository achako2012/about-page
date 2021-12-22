import React from 'react';

export const AuthContext = React.createContext({
    isAuthenticated: false,
    login: (jwtToken: string, id: string) => {},
    logout: () => {}
});

export default AuthContext;
