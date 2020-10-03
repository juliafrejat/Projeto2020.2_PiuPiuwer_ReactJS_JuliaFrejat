import React from 'react';

import { PiuComponent } from './styles';

import favoriteIcon from '../../assets/images/post_destaque.svg';
import likeIcon from '../../assets/images/post_like.svg';
import deleteIcon from '../../assets/images/post_deletar.svg';

import { PiuData, usePius } from '../../hooks/usePius';
import { useAuth } from '../../hooks/useAuth';

interface PiuProps {
    piuData: PiuData;
    id: number;
}

const Piu: React.FC<PiuProps> = ({ piuData }) => {
    const { loggedUserData } = useAuth();
    const { handleFavorite, handleLike, handleDelete } = usePius();

    return (
        <PiuComponent className="container-column post oldPost">
            <div className="container-row withinPost divNameTime">
                <div className="container-row divName">
                    <a className="notCircImg"><img src={piuData.user.foto} alt={piuData.user.first_name+' '+piuData.user.last_name}/></a>
                    <div className="container-column subdivName">
                        <p className="name">{piuData.user.first_name+' '+piuData.user.last_name}</p>
                        <small>{'@'+piuData.user.username}</small>
                    </div>
                </div>
                <small>{piuData.horario}</small>
            </div>

            <div className="container-row withinPost">
                <p className="text">{piuData.texto}</p>
            </div>

            <div className="container-row withinPost interact">
                <a onClick={handleFavorite}><img src={favoriteIcon} alt="Galeria"/></a>
                <a onClick={handleLike}><img src={likeIcon} alt="Camera"/></a>
                <a onClick={handleDelete}><img src={deleteIcon} alt="Emoticon"/></a>
            </div>
        </PiuComponent>
    )
    
}

export default Piu;