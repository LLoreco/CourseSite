import { useState } from "react";

function RegistrationPanel(){
    return(
        <div className="authPanel">
            <div className="authText">Регистрация</div>
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
                <button className="registrationZone">
                    Зарегистрироваться
                </button>
            </div>
        </div>
    )
}

export default RegistrationPanel