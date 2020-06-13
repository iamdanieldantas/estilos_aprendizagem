import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styleHome.css';

export default function HomePage() {

    const history = useHistory();
    const [name, setName] = useState('');

    const startQuiz = () => {
        if (name !== '') {
            console.log('passou');
            localStorage.setItem('name', name);
            history.push('/quiz');
        }
    }

    const handleName = (user_name) => {
        setName(user_name);
        console.log(name);
    }

    return (

        <div id="page-create-point">
            <div id="card">
                <form id="form">
                    <fieldset id="fieldset">
                        <div id="field">
                            <p>
                                Esse trabalho tem como objetivo, ajudar pessoas com idade avançada e portadora de alguma dificuldade especial a aprender coisas novas.
                            </p>
                            <input id="input" type="text" name="name" onChange={e => handleName(e.target.value)} placeholder="Insira seu nome para começarmos." required></input>
                            <button onClick={startQuiz}>Próximo</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

    )
}