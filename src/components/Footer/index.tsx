import React from 'react';

import { FooterComponent } from './styles';

interface FooterProps {
}

const Button: React.FC<FooterProps> = (props) => {
    return (
        <FooterComponent className="container-row footer">
            <div className="container-row links">
                <a href="/">Termos</a>
                <a href="/">Privacidade</a>
                <a href="/">Cookies</a>
                <a href="/">FAQ</a>
                <a href="/">Contato</a>
                <p>© 2020 PiuPiuwer, Inc.</p>
            </div>
        </FooterComponent>
    )
    
}

export default Button;