import React, { FormHTMLAttributes, useCallback, useState } from 'react';

import { Counter, NewPiuComponent } from './styles';
import Textarea from '../Textarea';
import Button from '../Button';

import galleryIcon from '../../assets/images/post_galeria.svg';
import cameraIcon from '../../assets/images/post_camera.svg';
import emotIcon from '../../assets/images/post_emoji.svg';
import pollIcon from '../../assets/images/post_votacao.svg';
import profilePic from '../../assets/images/foto_de_perfil.png';


interface NewPiuProps extends FormHTMLAttributes<HTMLFormElement> {
}

const NewPiu: React.FC<NewPiuProps> = (props) => {
    const [textoDePiu, setTextoDePiu] = useState('');

    const handleTextPiuChange = useCallback((e) => {
        setTextoDePiu(e.target.value);
    }, [setTextoDePiu]);

    return (
        <NewPiuComponent 
            id="newPost"
            className="container-column post"
        >
            <div className="container-row withinPost">
                <a href="/"><img src={profilePic} alt="Julia Frejat"/></a>
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
                    <a href="/"><img src={galleryIcon} alt="Galeria"/></a>
                    <a href="/"><img src={cameraIcon} alt="Camera"/></a>
                    <a href="/"><img src={emotIcon} alt="Emoção"/></a>
                    <a href="/"><img src={pollIcon} alt="Votação"/></a>
                </div>
                <Button isGreen={true} value="Piu Piu" />
            </div>
        </NewPiuComponent>
    )
    
}

export default NewPiu;