import React from 'react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';

function Feed() {
    return (
        <>
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
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Feed;