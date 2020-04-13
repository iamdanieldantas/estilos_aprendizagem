import React from 'react';
import FontSizeChange from '../../components/FontSizeChange';
import VolumeUp from '@material-ui/icons/VolumeUp';

import './style.css';

import midia_1 from '../../assets/audios/Conhecimentos Básicos de Computação e Microinformática.mp3';
import midia_2 from '../../assets/audios/ARQUITETURA SIMPLIFICADA DE UM COMPUTADOR.mp3';
import midia_3 from '../../assets/audios/COMPONENTES BÁSICOS DE UM COMPUTADOR.mp3';
import midia_4 from '../../assets/audios/FUNÇÕES DOS COMPONENTES BÁSICOS.mp3';
import midia_5 from '../../assets/audios/UNIDADE CENTRAL DE PROCESSAMENTO.mp3';
import midia_6 from '../../assets/audios/MEMÓRIA.mp3';
import midia_7 from '../../assets/audios/RAM (RANDOM ACCESS MEMORY).mp3';
import midia_8 from '../../assets/audios/ROM(READY ONLY MEMORY).mp3';

export default function Home() {
    const result_quiz = localStorage.getItem('deficiencia');
    const audio = new Audio(midia_1);
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

    const play = (midia) => {        
        audio.play(midia);
    }

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
                            <VolumeUp onClick={() => play(midia_1)} className='volume'/>
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