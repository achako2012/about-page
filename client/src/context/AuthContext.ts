import React from 'react'


export const AuthContext = React.createContext({
    isAuthenticated: false,
    login:(jwtToken:any, id:any)=>{},
    logout: ()=>{}
})
