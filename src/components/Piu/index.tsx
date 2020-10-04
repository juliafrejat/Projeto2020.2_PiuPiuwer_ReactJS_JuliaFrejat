import React, { ButtonHTMLAttributes, useCallback, useMemo } from 'react';

import { InteractionButton, PiuComponent } from './styles';

import favoriteIcon from '../../assets/images/post_destaque.svg';
import likeIcon from '../../assets/images/post_like.svg';
import deleteIcon from '../../assets/images/post_deletar.svg';

import { PiuData, usePius } from '../../hooks/usePius';
import { useAuth } from '../../hooks/useAuth';

interface PiuProps {
    piuData: PiuData;
    key: number;
}

const Piu: React.FC<PiuProps> = ({ piuData }) => {
    const { loggedUserData } = useAuth();
    const { handleFavorite, handleLike, handleDelete } = usePius();

    const { username, first_name, last_name, foto } = piuData.usuario;
    const { horario, texto, likers } = piuData;
 
    const likeCounter = likers.length;

    const relativeTime = useMemo(() => {
        const parsedPiuTime = Date.parse(horario);
        const currentTime = Date.parse(Date());

        const msPerMinute = 60 * 1000;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;
    
        const elapsed = currentTime - parsedPiuTime;
    
        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' s';
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' min';
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' h';
        }
    
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) + ' d';
        }
    
        else if (elapsed < msPerYear) {
            return (elapsed/msPerMonth > 1) ? (Math.round(elapsed/msPerMonth) + ' meses') : (Math.round(elapsed/msPerMonth) + ' mês');
        }
    
        else {
            return (elapsed/msPerMonth > 1) ? (Math.round(elapsed/msPerYear) + ' anos') : (Math.round(elapsed/msPerMonth) + ' ano');
        }
    }, [horario]);

    return (
        <PiuComponent className="container-column post oldPost">
            <div className="container-row withinPost divNameTime">
                <div className="container-row divName">
                    <button className="notCircImg"><img src={foto} alt={first_name+' '+last_name}/></button>
                    <div className="container-column subdivName">
                        <p className="name">{first_name+' '+last_name}</p>
                        <small>{'@'+username}</small>
                    </div>
                </div>
                <small className="time">{relativeTime}</small>
            </div>

            <div className="container-row withinPost">
                <p className="text">{texto}</p>
            </div>

            <div className="container-row withinPost interact">
                <InteractionButton onClick={handleLike}><img src={likeIcon} alt="Camera"/><small>{likeCounter}</small></InteractionButton>
                <InteractionButton onClick={handleFavorite}><img src={favoriteIcon} alt="Galeria"/></InteractionButton>
                <InteractionButton onClick={e => console.log(e.currentTarget.parentNode?.parentNode)} show={true}><img src={deleteIcon} alt="Emoticon"/></InteractionButton>
            </div>
        </PiuComponent>
    )
    
}

export default Piu;