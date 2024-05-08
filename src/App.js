import './App.css';
import React, { useState } from 'react';
import {truth, dare} from './list';
import myImg from './itachi.jpeg';

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const handleTruthClick = () => {
        const randomIndex = Math.floor(Math.random() * truth.length);
        setCurrentQuestion({ type: 'truth', text: truth[randomIndex] });
    };

    const handleDareClick = () => {
        const randomIndex = Math.floor(Math.random() *dare.length);
        setCurrentQuestion({ type: 'dare', text: dare[randomIndex] });
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="truth-or-dare">
            <img src={myImg} alt="Itachi"/>
            <h1>Truth or Dare</h1>
            {currentQuestion ? (
                <>
                    <p>{currentQuestion.text}</p>
                    <button onClick={handleRefresh} className='refresh-button'>Refresh</button>
                </>
            ) : (
                <>
                    <button onClick={handleTruthClick} className='truth-button'>Truth</button>
                    <button onClick={handleDareClick} className='dare-button'>Dare</button>
                </>
            )}
        </div>
    );
}

export default App;