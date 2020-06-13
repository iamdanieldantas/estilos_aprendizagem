import React, { useState } from 'react';
import './styleHome.css';

export default function HomePage() {

    const nome = localStorage.getItem('name');

    return (

        <div id="page-create-point">
            
            <header>

            </header>
            <div id="card">


                <form id="form">
                    <fieldset  id="fieldset">
                        <div id="field">
                            <p>
                                Esse trabalho tem como objetivo, ajudar pessoas com idade avançada e portadora de alguma dificuldade especial a aprender coisas novas.
                            </p>
                            <input id="input" type="text" name="name" placeholder="Insira seu nome para começarmos." required></input>
                            <button>Próximo</button>
                        </div>

                    </fieldset>
                </form>
            </div>

        </div>


    )
}