import { useState } from "react"
import LoginPanel from "../../components/LoginPanel"
import "../../styles/LoginPage/loginPage.css"

const LoginPage = ({switchToRegister}) => {
    return(
        <div className="fullPage">
            <LoginPanel switchToRegister={switchToRegister}/>
        </div>
    )
}
export default LoginPage