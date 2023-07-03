import React from "react"
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    onLogin: ()=>{},
    onLogOut: (token)=>{}
})

export default AuthContext;