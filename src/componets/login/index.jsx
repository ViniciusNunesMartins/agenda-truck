import React from 'react'
import { useRef, useState, useEffect } from 'react'

import './index.sass';


import { NavLink } from "react-router-dom";

export default function Login() {
    const login = useRef(null);


    useEffect(() => {
       console.log(login);
    }, login);


    return (
        <div className="App">
            <table>
                <tr>
                    <td>Login:</td>
                    <td><input type="text" ref={login}/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password"/></td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        <NavLink to="/favoritos" props={login}>Login</NavLink>
                    </td>
                </tr>
            </table>
        </div>
    );
}
