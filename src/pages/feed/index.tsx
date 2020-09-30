import React from 'react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import Textarea from '../../components/Textarea';

import galleryIcon from '../../assets/images/post_galeria.svg';
import cameraIcon from '../../assets/images/post_camera.svg';
import emotionIcon from '../../assets/images/post_emoji.svg';
import pollIcon from '../../assets/images/post_votacao.svg';

function Feed() {
    return (
        <div>
            <Header hasMenu={true} />
            <div className="container-row" id="body">
                <aside className="container-column">
                    <h2>Tendências</h2>
                    <hr></hr>
                </aside>

                <div className="container-column" id="posts">
                    <form className="container-column post" id="newPost">
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
                            <input type="submit" className="button withinPost" id="piupiu" value="Piu Piu" disabled/>
                        </div>
                    </form>

                    <div className="container-column" id="oldPosts">
                    </div>
                </div>

                <aside className="container-column">
                    <h2>Sugestões</h2>
                    <hr></hr>
                </aside>
            </div>
            <Footer />
        </div>
    )
}

export default Feed;