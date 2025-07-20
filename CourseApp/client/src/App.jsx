import { useState } from 'react'
import LoginPage from './pages/Auth/LoginPage.jsx'
import RegistrationPage from './pages/Auth/RegistrationPage.jsx'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <>
      <div>
        {isLogin ? (
          <LoginPage switchToRegister={()=>setIsLogin(false)}/>
        ) : (
          <RegistrationPage/>
        )}
      </div>
    </>
  )
}

export default App
