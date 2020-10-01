import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderComponent } from './styles';

import logoImg from '../../assets/images/passaro.svg';
import homeIcon from '../../assets/images/casa.svg';
import exploreIcon from '../../assets/images/explorar.svg';
import messageIcon from '../../assets/images/mensagem.svg';
import notifIcon from '../../assets/images/notificacao.svg';
import profileIcon from '../../assets/images/perfil.svg';
import moreIcon from '../../assets/images/mais.svg';
import searchIcon from '../../assets/images/busca.svg';
import Button from '../Button';

interface HeaderProps {
    hasMenu: boolean;
    backgroundColor?: string;
    border?: string;
    justification?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    const hasMenu = props.hasMenu;
    if (hasMenu){
        return (
            <HeaderComponent className="page-header" backgroundColor="var(--color-primary)" border="none" justification="space-between">
                <div className="container-row title">
                    <Link to="/">
                        <img src={logoImg} alt="PiuPiuwer" />
                        <h1>PiuPiuwer</h1>
                    </Link>
                </div>
    
                <div className="container-row nav">
                    <Link to="/"><img src={homeIcon} alt="Página Inicial" /></Link>
                    <Link to="/explore"><img src={exploreIcon} alt="Explorar" /></Link>
                    <Link to="/messages"><img src={messageIcon} alt="Mensagens" /></Link>
                    <Link to="/notifications"><img src={notifIcon} alt="Notificações" /></Link>
                    <Link to="/profile"><img src={profileIcon} alt="Perfil" /></Link>
                    <Link to="/"><img src={moreIcon} alt="Mais" id="more" /></Link>
                </div>

                <form className="container-row search">
                    <input type="text" name="search"/>
                    <button type="submit"><img src={searchIcon} alt="Buscar" /></button>
                </form>
            </HeaderComponent>
        )
    } else {
        return (
            <HeaderComponent className="page-header" backgroundColor="#FFFFFF" border="1px solid var(--color-secondary-light)" justification="flex-end">
                <Button isGreen={true} value="Cadastre-se" />
            </HeaderComponent>
        )
    }
    
}

export default Header;