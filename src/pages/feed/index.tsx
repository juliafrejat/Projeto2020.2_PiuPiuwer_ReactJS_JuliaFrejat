import React from 'react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import Textarea from '../../components/Textarea';

import { Body } from './styles';

function Feed() {
    return (
        <div className="container-column" id="full-body">
            <Header hasMenu={true} />
            <Body className="container-row" id="body">
                <aside className="container-column">
                    <h2>Tendências</h2>
                    <hr></hr>
                </aside>

                <div className="container-column" id="posts">
                    

                    <div className="container-column" id="oldPosts">
                    </div>
                </div>

                <aside className="container-column">
                    <h2>Sugestões</h2>
                    <hr></hr>
                </aside>
            </Body>
            <Footer />
        </div>
    )
}

export default Feed;