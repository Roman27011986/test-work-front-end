import { useState } from 'react';
import { signup, login } from '../../services/auth';
import styles from './LoginPage.module.css'
export default function LoginPage({toggleLogin,toggleLoading}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                console.log('error from LoginPage');;
        };
    }
   
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            const body = {
                email,
                password
            }
            toggleLoading(true)
            switch (event.nativeEvent.submitter.name) {
                case 'Sign up':
                    await signup(body)
                    break;
                case 'Login':
                    await login(body)
                    toggleLogin()
                    break;
                default:
                    break;
            }
            toggleLoading(false)
            setEmail('')
            setPassword('')
         };

         
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input type="email" placeholder='email' value={email} required name='email' onChange={handleChange} />
            <input type="password" placeholder='password' value={password} required name='password' onChange={handleChange} />
            <div className={styles.btnBox}>
            <button type='submit' name='Sign up'>Sign up</button>
            <button type='submit' name='Login'>Login</button>
            </div>
        </form>
    );
};