import React, { useState } from 'react';
import ira from './images/cat.jpeg';
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
                    src="https://www.youtube.com/embed/hY7m5jjJ9mM"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="main-video"
                ></iframe>
            </div>
            <h2>Ищи себя и получай стих в подарок</h2>
            <div className="app">
                {data.map(item => {
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
                                    src={ira}
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
