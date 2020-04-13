import React from 'react';
import FontSizeChange from '../../components/FontSizeChange';
import './style.css';

export default function Home() {
    const result_quiz = localStorage.getItem('deficiencia');
    alert("result: " + result_quiz);

    const gabarito = {
        0: {
            deficiencia: ['motora', 'visual'],
            exibir: 0,
            audio: 0
        },

        1: {
            deficiencia: ['auditiva', 'cognitiva'],
            exibir: 0
        },

        2: {
            deficiencia: ['visual', 'motora', 'auditiva'],
            exibir: 0
        },
    }

    //Atualiza dinamicamente todos as mídias que serão disponibilizadas
    Object.values(gabarito).filter(gabarito => gabarito.deficiencia
        .includes(result_quiz))
        .map((gabarito) => (
            gabarito.exibir = 1
        ));

    return (
        <div className="conteudo-container">
            <div className="container" id="target-font-size">

                <FontSizeChange />
                <header className="content">
                    <h1>Article Title</h1>
                </header>

                <div className="article-conteudo content" >
                    {gabarito[0].exibir ?
                        <article>
                            <h2>Conhecimentos Básicos de Computação e Microinformática</h2>
                            <p>Este tutorial trará uma série de tópicos sobre noções básicas de informática,
                               bem como uma série de conceitos sobre o mundo tecnológico. Nestas séries serão 
                               abordados assuntos tais como: Computação, Microinformática, noções de redes de 
                               computadores, componentes básicos dos computadores, funções dos componentes, 
                               noções de sistema operacional Windows, serviços de Internet, instalação física 
                               dos computadores, mais alguns temas que são abordados quase sempre na maioria das 
                               provas em concursos que são realizados em todo o Brasil. Você aprenderá desde saber 
                               o que é um computador até meios de transmissão de dados e redes de computadores.</p>
                            <br></br>

                            <p> <strong>HARDWARE</strong> – Que consiste na parte física do computador, é a parte palpável, aquela 
                                a qual podemos tocar e ver, incluindo os periféricos de entrada e saída como mouse
                                 e teclado, ou seja, o hardware é tudo o que pode ser visto e tocado e, como toda 
                                 máquina, não possui inteligência e não funciona sozinha, necessita de um comando 
                                 de lógica para entrar em operação, é necessária assim a intervenção humana para 
                                 fazê-lo funcionar</p>
                            
                            <br></br>
                            <p>
                            <strong>SOFTWARE</strong> – São sistemas que rodam no computador. Comporta os programas 
                            que irão funcionar e informar ao hardware o que executar, de que forma e quando executa-las.
                            </p>

                            <br></br>

                            <p>Resumindo: </p>
                            <li>Hardware = é o equipamento.</li>
                            <li>Software = é o programa</li>

                        </article> : <></>}

                        {gabarito[1].exibir ?
                        <article>
                            <h2>Conhecimentos Básicos de Computação e Microinformática</h2>
                            <p>Este tutorial trará uma série de tópicos sobre noções básicas de informática,
                               bem como uma série de conceitos sobre o mundo tecnológico. Nestas séries serão 
                               abordados assuntos tais como: Computação, Microinformática, noções de redes de 
                               computadores, componentes básicos dos computadores, funções dos componentes, 
                               noções de sistema operacional Windows, serviços de Internet, instalação física 
                               dos computadores, mais alguns temas que são abordados quase sempre na maioria das 
                               provas em concursos que são realizados em todo o Brasil. Você aprenderá desde saber 
                               o que é um computador até meios de transmissão de dados e redes de computadores.</p>
                            <br></br>

                            <p> <strong>HARDWARE</strong> – Que consiste na parte física do computador, é a parte palpável, aquela 
                                a qual podemos tocar e ver, incluindo os periféricos de entrada e saída como mouse
                                 e teclado, ou seja, o hardware é tudo o que pode ser visto e tocado e, como toda 
                                 máquina, não possui inteligência e não funciona sozinha, necessita de um comando 
                                 de lógica para entrar em operação, é necessária assim a intervenção humana para 
                                 fazê-lo funcionar</p>
                            
                            <br></br>
                            <p>
                            <strong>SOFTWARE</strong> – São sistemas que rodam no computador. Comporta os programas 
                            que irão funcionar e informar ao hardware o que executar, de que forma e quando executa-las.
                            </p>

                            <br></br>

                            <p>Resumindo: </p>
                            <li>Hardware = é o equipamento.</li>
                            <li>Software = é o programa</li>

                        </article> : <></>}

                </div>
            </div>
        </div>
    )
}