import React from 'react';

import { PiuComponent } from './styles';

import favoriteIcon from '../../assets/images/post_destaque.svg';
import likeIcon from '../../assets/images/post_like.svg';
import deleteIcon from '../../assets/images/post_deletar.svg';

interface PiuProps {
}

const Piu: React.FC<PiuProps> = (props, piu) => {
    const loggedUser = localStorage.getItem('@Project:user');

    const handleFavorite = () => {
        var favoriteCounter = 0;
        if (favoriteCounter%2 == 1) {
            // fazer request pra adicionar
        } else {
            // fazer request pra tirar
        }
    }
    const handleLike = () => {
        var likeCounter = 0;
        if (likeCounter%2 == 1) {
            // fazer request pra adicionar
        } else {
            // fazer request pra tirar
        }
    }
    const handleDelete = () => {
        if (piu.user === loggedUser)  {
            // fazer request pra deletar
        }
            
    }

    return (
        <PiuComponent className="container-column post oldPost">
            <div className="container-row withinPost divNameTime">
                <div className="container-row divName">
                    <a className="notCircImg"><img src={piu.user.foto} alt={piu.user.first_name+' '+piu.user.last_name}/></a>
                    <div className="container-column subdivName">
                        <p className="name">{piu.user.first_name+' '+piu.user.last_name}</p>
                        <small>{'@'+piu.user.username}</small>
                    </div>
                </div>
                <small>{piu.time}</small>
            </div>

            <div className="container-row withinPost">
                <p className="text">{piu.texto}</p>
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