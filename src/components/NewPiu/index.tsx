import React, { FormHTMLAttributes, useCallback, useEffect, useState } from 'react';

import { Counter, EmptyErrorMsg, InteractionButton, NewPiuComponent, TooLongErrorMsg } from './styles';
import Textarea from '../Textarea';
import Button from '../Button';

import galleryIcon from '../../assets/images/post_galeria.svg';
import cameraIcon from '../../assets/images/post_camera.svg';
import emotIcon from '../../assets/images/post_emoji.svg';
import pollIcon from '../../assets/images/post_votacao.svg';

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

        if (textoDePiu.length > 0 && textoDePiu.length <= 140) {
            sendPiu(loggedUserData.id, textoDePiu);
        } else {
            setClick(true);
        }
    }, [sendPiu, loggedUserData, textoDePiu])

    const [error, setError] = useState(false);

    const [click, setClick] = useState(false);

    useEffect(() => {
        if (textoDePiu.length > 0 && textoDePiu.length <= 140) {
            setError(false);
            setClick(false);
        } else {
            setError(true);
            setClick(false);
        }
    }, [textoDePiu.length])

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
                <p id="errorMsg">
                    <EmptyErrorMsg isEmpty={textoDePiu.length == 0} click={click}>O piu não pode estar vazio.</EmptyErrorMsg>
                    <TooLongErrorMsg limitReached={textoDePiu.length > 140} click={click}>O piu não pode ter mais de 140 caracteres.</TooLongErrorMsg>
                </p>
                <Counter limitReached={textoDePiu.length > 140}>{textoDePiu.length}/140</Counter>
            </div>

            <div className="container-row postButtons">
                <div className="container-row withinPost interact">
                    <InteractionButton><img src={galleryIcon} alt="Galeria"/></InteractionButton>
                    <InteractionButton><img src={cameraIcon} alt="Camera"/></InteractionButton>
                    <InteractionButton><img src={emotIcon} alt="Emoção"/></InteractionButton>
                    <InteractionButton><img src={pollIcon} alt="Votação"/></InteractionButton>
                </div>
                <Button isGreen={true} value="Piu Piu" onClick={handleSendPiu} isNotActive={error}/>
            </div>
        </NewPiuComponent>
    )
    
}

export default NewPiu;