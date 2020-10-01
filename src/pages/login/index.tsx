import React from 'react';

import logoImg from '../../assets/images/passaro.svg';

import { HalfContainer } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Login() {
    async function handleLogIn(e: FormEvent) {
        e.preventDefault();

        
    }
    
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
                    <form className="container-column">
                        <Input placeholder="Email ou nome de usuário" />
                        <Input placeholder="Senha" />
                        <Button isGreen={true} value="Continuar"/>
                    </form>
                    <p>Esqueceu a senha?</p>
                </HalfContainer>
            </div>
            <Footer />
        </div>
    )
}

export default Login;