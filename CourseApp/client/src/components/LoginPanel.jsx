import { useState } from "react";
import "../styles/LoginPage/loginPage.css"

function LoginPanel({switchToRegister}){
    return(
        <div className="authPanel">
            <div className="authText">Авторизация</div>
            <div className="inputZone">
                <div className="inputText">Логин</div>
                <input className="inputInfo"></input>
            </div>
            <div className="inputZone">
                <div className="inputText">Пароль</div>
                <input className="inputInfo"></input>
            </div>
            <div className="buttonZone">
                <button className="sendLoginButton">
                    Вход
                </button>
            </div>
            <div>
                <button className="registrationZone" onClick={switchToRegister}>
                    Зарегистрироваться
                </button>
            </div>
        </div>
    )
}

export default LoginPanel