import React, { useState } from 'react';

import ira from './images/ira.jpg';
import nastya from './images/nastya.jpg';
import olesya from './images/olesya.jpg';
import juliya from './images/julia.jpg';
import rita from './images/rita.jpg';
import nastya30 from './images/nastya30.jpg';
import vika from './images/vika.jpg';

import './App.css';
import data from './data';

function App() {
    const [active, setActive] = useState('');

    return (
        <div>
            <h1>Новогоднее обращение предводителя</h1>
            <div className="main-video">
                <iframe
                    width="320"
                    height="320"
                    src="https://www.youtube.com/embed/IePHmnG9kiE"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="main-video"
                ></iframe>
            </div>
            <h2>Ищи себя и получай стих в подарок</h2>
            <div className="app">
                {data.map(item => {
                    let image;

                    switch (item.name) {
                        case 'ira':
                            image = ira;
                            break;
                        case 'nastya':
                            image = nastya;
                            break;
                        case 'olesya':
                            image = olesya;
                            break;
                        case 'juliya':
                            image = juliya;
                            break;
                        case 'rita':
                            image = rita;
                            break;
                        case 'nastya30':
                            image = nastya30;
                            break;
                        default:
                            image = vika;
                    }

                    return (
                        <div className="item">
                            {active === item.name ? (
                                <iframe
                                    width="320"
                                    height="320"
                                    src={item.video}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    key={item.name}
                                    title={item.name}
                                ></iframe>
                            ) : (
                                <img
                                    src={image}
                                    className="App-logo"
                                    alt="logo"
                                    onClick={() => setActive(item.name)}
                                />
                            )}{' '}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
