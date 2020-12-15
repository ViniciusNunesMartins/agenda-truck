import React from 'react'
import { useRef } from 'react'
import { Link } from "react-router-dom";

import './index.sass';

export default function Favoritos({login}) {

    console.log("Login:", login)

    return (
        <div className="App">
            <Link to="/">Sair</Link>
            <h1>Favoritos: {login}</h1>
            <div>
                Endereco 1
                <textarea className="ta"/>
                Endereco 2
                <textarea className="ta"/>

                <Link to='/site'>Salvar</Link>
            </div>
        </div>
    );
}
