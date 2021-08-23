import { useState } from 'react';
import LoginPage from '../pages/LoginPage';
import MePage from '../pages/MePage';
import Loader from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isLogin')))
  const [isLoading, setIsLoading] = useState(false)
  const toggleLoading = (boolean) => {
    setIsLoading(boolean)
  }
  const toggleLogin = () => {
    setIsLogin(JSON.parse(localStorage.getItem('isLogin')))
  }
  
  return (
    <>
      {isLogin ? <MePage /> : <LoginPage toggleLogin={toggleLogin} toggleLoading={toggleLoading}/>}
      {isLoading && <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0}
      />}
    </>
  );
}

export default App;
