import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/passaro.svg';
import homeIcon from '../../assets/images/casa.svg';
import exploreIcon from '../../assets/images/explorar.svg';
import messageIcon from '../../assets/images/mensagem.svg';
import notifIcon from '../../assets/images/notificacao.svg';
import profileIcon from '../../assets/images/perfil.svg';
import moreIcon from '../../assets/images/mais.svg';

interface PageHeaderProps {
    hasMenu: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const hasMenu = props.hasMenu;
    if (hasMenu){
        return (
            <header className="page-header">
                <div className="logo-container">
                    <Link to="/">
                        <img src={logoImg} alt="PiuPiuwer" />
                        <h1>PiuPiuwer</h1>
                    </Link>
                </div>
    
                <div className="header-content">
                    <Link to="/"><img src={homeIcon} alt="Página Inicial" /></Link>
                    <Link to="/"><img src={exploreIcon} alt="Explorar" /></Link>
                    <Link to="/"><img src={messageIcon} alt="Mensagens" /></Link>
                    <Link to="/"><img src={notifIcon} alt="Notificações" /></Link>
                    <Link to="/"><img src={profileIcon} alt="Perfil" /></Link>
                    <Link to="/"><img src={moreIcon} alt="Mais" /></Link>
                </div>
            </header>
        )
    } else {
        return (
            <header className="page-header">
    
                <div className="header-content">
                    <strong>{props.title}</strong>
                    { props.description && <p>{props.description}</p> }
                    {props.children}
                </div>
            </header>
        )
    }
    
}

export default PageHeader;