import React, {FormEvent, useState, useCallback} from 'react';

import { useAuth } from '../../hooks/useAuth';

import logoImg from '../../assets/images/passaro.svg';

import { HalfContainer } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Header from '../../components/Header';



function Login() {
    const { logIn, errorTxt } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = useCallback((e: FormEvent) => {
        e.preventDefault();
        logIn({username, password});
    }, [username, password]);
    
    return (
        <div className="container-column full-body-login">
            <Header hasMenu={false} />
            <div className="container-row body">
                <HalfContainer className="container-row half-container image">
                    <div className="container-row big-title">
                        <img src={logoImg} alt="PiuPiuwer"/>
                        <h1>PiuPiuwer</h1>
                    </div>
                </HalfContainer>
                <HalfContainer className="container-column half-container login">
                    <h2>Entrar</h2>
                    <form className="container-column error" onSubmit={handleLogIn} >
                        <Input 
                            placeholder="Nome de usuário" 
                            type="text"
                            onChange={(e) => { setUsername(e.target.value) }}
                        />

                        <Input 
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }} 
                        />

                        <p className="error-txt">{errorTxt}</p>

                        <Button isGreen={true} value="Continuar" type="submit" />
                    </form>
                    <p>Esqueceu a senha?</p>
                </HalfContainer>
            </div>
            <Footer />
        </div>
    )
}

export default Login;