import React, { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';

import { Link } from 'react-router-dom';

import { DropdownComponent } from './styles';

import moreIcon from '../../assets/images/mais.svg';

interface DropdownProps {
    id?: string;
    classNames?: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
    const { logOut } = useAuth();

    const handleLogOut = () => {
        logOut();
    };

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <>
            <button onClick={() => toggle()}><img src={moreIcon} alt="Mais" id="more" /></button>
            <DropdownComponent
                id={props.id}
                className="container-column dropdown"
            >
                {open && (
                    <ul>
                        <li><Link to="/">Configurações</Link></li>
                        <li><Link to="/">Ajuda</Link></li>
                        <li><Link to="/" onClick={handleLogOut}>Sair</Link></li>
                    </ul>
                )}
            </DropdownComponent>
        </>
    )

    
    
}

export default Dropdown;