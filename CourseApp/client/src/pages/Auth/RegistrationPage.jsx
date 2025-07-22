import { useState } from "react"
import RegistrationPanel from "../../components/RegistrationPanel"
import "../../styles/LoginPage/registrationPage.css"

const RegistrationPage = ({switchToLogin}) => {

    return(
        <div className="fullPage">
            <RegistrationPanel switchToLogin={switchToLogin}/>
        </div>
    )
}
export default RegistrationPage