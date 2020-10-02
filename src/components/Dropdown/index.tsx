import React from 'react';

import { useAuth } from '../../hooks/useAuth';

import { Link } from 'react-router-dom';
import { DropdownComponent } from './styles';

interface DropdownProps {
    id?: string;
    classNames?: string;
    display: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
    const { logOut } = useAuth();

    const handleLogOut = () => {
        logOut();
    };

    return (
        <DropdownComponent
            id={props.id}
            className="container-column dropdown"
            display={props.display}
        >
            <ul>
                <li><Link to="/">Configurações</Link></li>
                <li><Link to="/">Ajuda</Link></li>
                <li><Link to="/" onClick={handleLogOut}>Sair</Link></li>
            </ul>
        </DropdownComponent>
    )
    
}

export default Dropdown;