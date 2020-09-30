import React, { FormHTMLAttributes } from 'react';

import { NewPiuComponent } from './styles';
import Textarea from '../Textarea';
import Button from '../Button';

import galleryIcon from '../../assets/images/post_galeria.svg';
import cameraIcon from '../../assets/images/post_camera.svg';
import emotionIcon from '../../assets/images/post_emoji.svg';
import pollIcon from '../../assets/images/post_votacao.svg';


interface NewPiuProps extends FormHTMLAttributes<HTMLFormElement> {
}

const NewPiu: React.FC<NewPiuProps> = (props) => {
    return (
        <NewPiuComponent 
            id="newPost"
            className="container-column post"
        >
            <div className="container-row withinPost">
                <a href=""><img src="../../assets/images/foto_de_perfil.png" alt="Julia Frejat"/></a>
                <div className="container-row" id="newPost-txt">
                    <Textarea id="newPostTextarea" placeholder="Digite um novo piu." />
                </div>
            </div>

            <div className="container-row" id="validText">
                <p id="errorMsg"></p>
                <p id="charCounter">0/140</p>
            </div>

            <div className="container-row postButtons">
                <div className="container-row withinPost interact">
                    <a href=""><img src={galleryIcon}/></a>
                    <a href=""><img src={cameraIcon}/></a>
                    <a href=""><img src={emotionIcon}/></a>
                    <a href=""><img src={pollIcon}/></a>
                </div>
                <Button 
                className="button withinPost"
                id="piupiu"
                backgroundColor="var(--color-primary)" 
                hoverBackgroundColor="var(--color-primary-dark"
                textColor="#FFFFFF"
                border="none"
                value="Piu Piu"
                />
            </div>
        </NewPiuComponent>
    )
    
}

export default NewPiu;