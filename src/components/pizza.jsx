// pizza.jsx
import React from 'react';
import '../styles/piza.css';
import '../javascript/pizza.js';

const Pizza = () => {
    return (
        <div>
            <h1>New Page Content</h1>
             Add your content here
            <title>RoTaTiNgPiZzAWeIrDnEsS</title>
            <div className="card-container">
                <div className="rotating-card">
                    <div className="card">
                        <img className="pizza-image" id="image" src="" alt="Rotating Pizza" />
                        <p className="message" id="message"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
