import React from "react"
const AuthContext = React.createContext({
    token: '',
    isloggedIn: false,
    onLogIn: ()=>{},
    onLogOut: (token)=>{}
})

export default AuthContext;