import React from 'react';
import './index.sass';

import { Link } from "react-router-dom";

export default function Site() {
    return (
        <div className="App">
            <Link to="/">Sair</Link>
            <iframe src="https://sifreca.esalq.usp.br/" className="frame"></iframe>
        </div>
    );
}