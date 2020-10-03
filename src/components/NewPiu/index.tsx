import React, { FormHTMLAttributes, useCallback, useState } from 'react';

import { Counter, NewPiuComponent } from './styles';
import Textarea from '../Textarea';
import Button from '../Button';

import galleryIcon from '../../assets/images/post_galeria.svg';
import cameraIcon from '../../assets/images/post_camera.svg';
import emotIcon from '../../assets/images/post_emoji.svg';
import pollIcon from '../../assets/images/post_votacao.svg';
import profilePic from '../../assets/images/foto_de_perfil.png';

import { usePius } from '../../hooks/usePius';
import { useAuth } from '../../hooks/useAuth';


interface NewPiuProps extends FormHTMLAttributes<HTMLFormElement> {
}

const NewPiu: React.FC<NewPiuProps> = (props) => {
    const { sendPiu } = usePius();
    const { loggedUserData } = useAuth();

    const [textoDePiu, setTextoDePiu] = useState('');

    const handleTextPiuChange = useCallback((e) => {
        setTextoDePiu(e.target.value);
    }, [setTextoDePiu]);

    const handleSendPiu = useCallback(async (e) => {
        e.preventDefault();
        sendPiu(loggedUserData.id, textoDePiu);
    }, [sendPiu, loggedUserData, textoDePiu])

    return (
        <NewPiuComponent 
            id="newPost"
            className="container-column post"
        >
            <div className="container-row withinPost">
                <button className="notCircImg"><img src={loggedUserData.foto} alt="Julia Frejat"/></button>
                <div className="container-row" id="newPost-txt">
                    <Textarea 
                        id="newPostTextarea" 
                        placeholder="Digite um novo piu."
                        value={textoDePiu} 
                        onChange={handleTextPiuChange}
                        />
                </div>
            </div>

            <div className="container-row" id="validText">
                <p id="errorMsg"></p>
                <Counter limitReached={textoDePiu.length > 140}>{textoDePiu.length}/140</Counter>
            </div>

            <div className="container-row postButtons">
                <div className="container-row withinPost interact">
                    <button><img src={galleryIcon} alt="Galeria"/></button>
                    <button><img src={cameraIcon} alt="Camera"/></button>
                    <button><img src={emotIcon} alt="Emoção"/></button>
                    <button><img src={pollIcon} alt="Votação"/></button>
                </div>
                <Button isGreen={true} value="Piu Piu" onClick={handleSendPiu} />
            </div>
        </NewPiuComponent>
    )
    
}

export default NewPiu;