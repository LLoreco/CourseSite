import { useState } from "react";
import "../styles/LoginPage/registrationPage.css"

function RegistrationPanel({switchToLogin}){
    const [selectedRole, setSelectedRole] = useState('teacher');
    const handleSubmit = () =>{
        console.log('Выбранная роль:', selectedRole === 'teacher' ? 'Учитель' : 'Ученик');
        switchToLogin();
    }
    return(
        <div className="fullPage">
            <div className="registrationPanel">
                <div className="registrationText">Регистрация</div>
                <div className="inputZone">
                    <div className="inputText">Имя</div>
                    <input className="inputInfo"></input>
                </div>
                <div className="inputZone">
                    <div className="inputText">Фамилия</div>
                    <input className="inputInfo"></input>
                </div>
                <div className="inputZone">
                    <div className="inputText">Почта</div>
                    <input className="inputInfo"></input>
                </div>
                <div className="inputZone">
                    <div className="inputText">Роль</div>
                    <div className="roleSelector">
                        <button 
                            onClick={() => setSelectedRole('teacher')}
                            className={`roleButton ${selectedRole === 'teacher' ? 'active' : 'inactive'}`}>
                            Учитель
                        </button>
                        <button 
                            onClick={() => setSelectedRole('student')}
                            className={`roleButton ${selectedRole === 'student' ? 'active' : 'inactive'}`}>
                            Ученик
                        </button>
                    </div>
                </div>
                <div className="inputZone">
                    <div className="inputText">Пароль</div>
                    <input type="password" className="inputInfo"></input>
                </div>
                <div className="buttonZone">
                    <button className="sendRegistrationButton"
                        onClick={() => {
                            handleSubmit();
                        }}>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPanel;