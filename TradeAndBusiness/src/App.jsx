import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';// Asume que tienes una página de inicio definida
// Otros imports necesarios...

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
