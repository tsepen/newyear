import React, { useState } from 'react';

import ira from './images/ira.jpg';
import nastya from './images/nastya.jpg';
import olesya from './images/olesya.jpg';
import juliya from './images/julia.jpg';
import rita from './images/rita.jpg';
import nastya30 from './images/nastya30.jpg';
import vika from './images/vika.jpg';
import den from './images/den.jpg';

import mainVideo from './video/Поздравление.mp4';

import iraV from './video/Ире.mp4';
import nastyaV from './video/Насте2.mp4';
import olesyaV from './video/Олесе2.mp4';
import juliyaV from './video/Юле.mp4';
import ritaV from './video/Рите.mp4';
import nastya30V from './video/Насте30.mp4';
import vikaV from './video/Вике.mp4';

import './App.css';
import data from './data';

function App() {
    const [active, setActive] = useState('');

    return (
        <div>
            <h1>Новогоднее поздравление девчонок e-com befree от парней </h1>
            <div className="main-video">
                {active === 'main' ? (
                    <video
                        src={mainVideo}
                        controls
                        playsinline
                        loop
                        autoPlay
                    ></video>
                ) : (
                    <img
                        src={den}
                        alt={'den'}
                        onClick={() => setActive('main')}
                    />
                )}
            </div>
            <h2>Для тебя есть персональное поздравление</h2>
            <div className="app">
                {data.map(item => {
                    let image;
                    let video;

                    switch (item.name) {
                        case 'ira':
                            image = ira;
                            video = iraV;
                            break;
                        case 'nastya':
                            image = nastya;
                            video = nastyaV;
                            break;
                        case 'olesya':
                            image = olesya;
                            video = olesyaV;
                            break;
                        case 'juliya':
                            image = juliya;
                            video = juliyaV;
                            break;
                        case 'rita':
                            image = rita;
                            video = ritaV;
                            break;
                        case 'nastya30':
                            image = nastya30;
                            video = nastya30V;

                            break;
                        default:
                            image = vika;
                            video = vikaV;
                    }

                    return (
                        <div className="item" key={item.name}>
                            {active === item.name ? (
                                <video
                                    src={video}
                                    controls
                                    autoPlay
                                    playsinline
                                    loop
                                ></video>
                            ) : (
                                <img
                                    src={image}
                                    alt={item.name}
                                    onClick={() => setActive(item.name)}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
