import React from 'react';
import Footer from '../../components/Footer';

import Header from '../../components/Header';
import NewPiu from '../../components/NewPiu';
import PiusArea from '../../components/PiusArea';

import { Body } from './styles';

function Feed() {
    return (
        <div className="container-column full-body-feed">
            <Header hasMenu={true} />
            <Body className="container-row" id="body">
                <aside className="container-column">
                    <h2>Tendências</h2>
                    <hr></hr>
                </aside>

                <div className="container-column" id="posts">
                    <NewPiu />

                    <PiusArea />
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