import React from 'react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import Textarea from '../../components/Textarea';

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
                                <a href=""><img src="../../assets/images/post_galeria.svg"/></a>
                                <a href=""><img src="../../assets/images/post_camera.svg"/></a>
                                <a href=""><img src="../../assets/images/post_emoji.svg"/></a>
                                <a href=""><img src="../../assets/images/post_votacao.svg"/></a>
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