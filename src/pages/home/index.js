import React, { useState } from 'react';
import FontSizeChange from '../../components/FontSizeChange';
import VolumeUp from '@material-ui/icons/VolumeUp';
import LikertScale from '../../components/LikertScale'
import api from '../../services/api';

import './style.css';

import midia_1 from '../../assets/audios/Conhecimentos Básicos de Computação e Microinformática.mp3';
import midia_2 from '../../assets/audios/COMPONENTES BÁSICOS DE UM COMPUTADOR.mp3';
import midia_3 from '../../assets/audios/ARQUITETURA SIMPLIFICADA DE UM COMPUTADOR.mp3';
import midia_4 from '../../assets/audios/FUNÇÕES DOS COMPONENTES BÁSICOS.mp3';
import midia_5 from '../../assets/audios/UNIDADE CENTRAL DE PROCESSAMENTO.mp3';
import midia_6 from '../../assets/audios/MEMÓRIA.mp3';
import midia_7 from '../../assets/audios/RAM (RANDOM ACCESS MEMORY).mp3';
import midia_8 from '../../assets/audios/ROM(READY ONLY MEMORY).mp3';

import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';

export default function Home() {
    // const result_quiz = localStorage.getItem('deficiencia');
    // const nome = localStorage.getItem('deficiencia');
    const [deficiencia, setDeficiencia] = useState(localStorage.getItem('deficiencia'));
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [nota, setNota] = useState(0);
    const [avaliar, setAvaliar] = useState(false);
    // alert("resultado: " + result_quiz);

    const play = (midia) => {
        const audio = new Audio(midia);
        audio.play();
    }

    const gabarito = {
        0: {
            deficiencia: ['motora', 'visual', 'cognitivo'],
            exibir: 0,
            audio: 0
        },

        1: {
            deficiencia: ['motora', 'auditiva'],
            exibir: 0
        },

        2: {
            deficiencia: ['visual', 'motora', 'auditiva', 'cognitivo'],
            exibir: 0
        },
        3: {
            deficiencia: ['visual', 'motora', 'auditiva', 'cognitivo'],
            exibir: 0
        },
        4: {
            deficiencia: ['visual', 'motora', 'auditiva'],
            exibir: 0
        },
        5: {
            deficiencia: ['visual', 'motora', 'auditiva', 'cognitivo'],
            exibir: 0
        },
        6: {
            deficiencia: ['visual', 'motora', 'auditiva'],
            exibir: 0
        },
        7: {
            deficiencia: ['visual', 'motora', 'auditiva'],
            exibir: 0
        },
    }

    //Atualiza dinamicamente todos as mídias que serão disponibilizadas
    Object.values(gabarito).filter(gabarito => gabarito.deficiencia
        .includes(deficiencia))
        .map((gabarito) => (
            gabarito.exibir = 1
        ));

    // useEffect(() => {
    //     setDeficiencia(result_quiz);
    //     setNota(5);
    // }, [result_quiz])

    const saveRating = (nota) => {
        setNota(nota);
        setAvaliar(true);
    }

    const submitRating = () => {
        if (avaliar) {
            const rating = {
                nm_usuario: 'Daniel Dantas',
                nr_nota: nota,
                ds_deficiencia: (deficiencia == null ? 'auditiva' : deficiencia)
            }
            try {
                console.log(rating);

                setAvaliar(false);
                api.post('avaliacao', rating);
                alert("Avaliação concluída com sucesso!");
            } catch (error) {
                alert("Erro ao cadastrar uma avaliação. Tente novamente.");
            }
        } else {
            alert("Preencha a resposta antes de enviar")
        }

    }


    return (
        <div className="conteudo-container">
            <div className="container" id="target-font-size">

                <header className="content">
                    <h1>CONHECIMENTOS BÁSICOS DE COMPUTAÇÃO E MICROINFORMÁTICA
                        <span><VolumeUp onClick={() => play(midia_1)} className='volume' /></span>
                    </h1>

                </header>


                <div className="article-conteudo content" >

                    <br></br>
                    <FontSizeChange />
                    <br></br>

                    {gabarito[0].exibir ?
                        <article>

                            <iframe width="700" height="315" src="https://www.youtube.com/embed/iTaAGSMl2zw"
                                frameborder="0" title="Conhecimento básico de computação e informatica"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>

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
                            <br></br>

                        </article> : <></>}

                    {gabarito[1].exibir ?
                        <article>
                            <h2>COMPONENTES BÁSICOS DE UM COMPUTADOR
                                <span><VolumeUp onClick={() => play(midia_2)} className='volume' /></span>
                            </h2>
                            <p>Aprendemos que o hardware é cada elemento físico que constitui o equipamento. Genericamente falando, o computador é formado por um conjunto de equipamentos que são caracterizados de acordo com sua função no sistema de arquitetura de um computador. Por tanto, existem vários tipos de componentes que formam juntos o universo do hardware de um computador.</p>
                            <br></br>

                            <p> A figura a seguir demonstra um exemplo simples de um computador e seus equipamentos:</p>
                            <br></br>

                            <div class="imagem">
                                <img src={img1} alt="Primeira imagem, computador"></img>
                            </div>
                            <br></br>

                            <p>1 – Gabinete – contendo:</p>
                            <li>Placa mãe (unidade de controle)</li>
                            <li>Placa de vídeo</li>
                            <li>Memórias (unidades de aritmética e lógica)</li>
                            <li>Disco Rígido ou HD</li>
                            <br></br>

                            <p>2 – Monitor </p>
                            <br></br>

                            <p>3 – Unidade de disco flexível </p>
                            <br></br>

                            <p>4 – Teclado </p>
                            <br></br>

                            <p>5 – Mouse </p>
                            <br></br>

                            <p>6 – Impressora </p>
                            <br></br>

                            <p>Esses equipamentos são agrupados em duas partes distintas: uma, a Unidade Central de Processamento (CPU) ou Unidade de Sistema, onde realmente ocorre o processamento de dados; e a outra, os Periféricos, que são os equipamentos eletrônicos ou eletromecânicos necessários à entrada e/ou saída de dados.</p>
                            <br></br>

                            <p>Esses agrupamentos formam e definem a divisão primária de um computador, por isso são considerados componentes básicos.</p>
                            <br></br>

                            <p>A relação entre os dois componentes básicos do computador resulta no esquema abaixo conhecido como “ARQUITETURA DE VON NEUMANN”, este nome foi dado em homenagem a seu inventor, que definiu a arquitetura do computador como sendo ENTRADA, PROCESSAMENTO E SAÍDA:</p>
                            <br></br>

                            <p>ENTRADA => PROCESSAMENTO  => SAÍDA</p>
                            
                            <br></br>
                        </article> : <></>}

                    {gabarito[2].exibir ?
                        <article>
                            <h2>ARQUITETURA SIMPLIFICADA DE UM COMPUTADOR
                                <span><VolumeUp onClick={() => play(midia_3)} className='volume' /></span>
                            </h2>

                            <div class="imagem">
                                <img src={img2} alt="Segunda imagem, diagrama"></img>
                            </div>
                            <br></br>
                        </article> : <></>}

                    {gabarito[3].exibir ?
                        <article>

                            <h2>FUNÇÕES DOS COMPONENTES BÁSICOS
                                <span><VolumeUp onClick={() => play(midia_4)} className='volume' /></span>
                            </h2>

                            <p>Para um tratamento adequado dos dados e para a execução de suas tarefas de forma organizada e segura, o computador precisa de uma arquitetura que, além de estabelecer seus componentes básicos, determina os seus objetivos e o funcionamento do conjunto de suas partes.</p>
                            <br></br>
                        </article> : <></>}

                    {gabarito[4].exibir ?
                        <article>

                            <h2>UNIDADE CENTRAL DE PROCESSAMENTO – CPU
                                <span><VolumeUp onClick={() => play(midia_5)} className='volume' /></span>
                            </h2>

                            <p>É um circuito integrado.</p>
                            <br></br>

                            <p>A Unidade Central de Processamento ou CPU contém os seguintes componentes:</p>
                            <br></br>

                            <li>a unidade de controle;</li>
                            <li>a unidade aritmética e lógica;</li>
                            <li>a memória interna ou principal do computador.</li>
                            <br></br>

                            <p>A CPU é o “cérebro”, ou o centro nervoso do computador, porque controla gerencialmente todas as suas operações, através da unidade de aritmética e lógica, e armazena os dados e instruções na memória interna.</p>
                            <br></br>

                            <p>A Unidade de Controle gerencia todas as operações executadas pelo computador, sob a direção de um programa armazenado.</p>
                            <br></br>

                            <p>A Unidade de Aritmética e Lógica, também chamada de Unidade Lógica e Aritmética (ULA) ou (ALU), do inglês Aritmetic and Logic Unit, executa as operações aritméticas e lógicas dirigidas pela Unidade de Controle. Operações lógicas são, de forma simples, a habilidade de comparar coisas para tomada de decisão.</p>
                            <br></br>

                            <p>A Memória Interna ou Principal é um dispositivo para armazenar dados e instruções. Ela é usada para desempenhar as seguintes funções:</p>
                            <br></br>

                            <li>Armazenar o conjunto de instruções a ser executado, ou seja, o programa em si;</li>
                            <li>Armazenar os dados de entrada até que sejam solicitados para o processamento;</li>
                            <li>Armazenar dados intermediários de processamento e servir como área de trabalho;</li>
                            <li>Armazenar os dados de saída que são o resultado do processamento dos dados de entrada;</li>
                            <br></br>

                        </article> : <></>}

                    {gabarito[5].exibir ?
                        <article>

                            <h2>MEMÓRIA
                                <span><VolumeUp onClick={() => play(midia_6)} className='volume' /></span>
                            </h2>

                            <p>A memória de um computador pode ser classificada segundo esta hierarquia:</p>
                            <br></br>

                            <li>Memória Principal: nela o processador central do computador busca as instruções necessárias para executar e armazena os dados do processamento.</li>
                            <li>Memória Secundária: usada para segmentos inativos de programas e arquivos de dados que são trazidos à memória principal quando necessário.</li>
                            <br></br>

                            <p>O processador central só executa as instruções e processa os dados que esteja na memória principal. A memória secundária é usada para organização de arquivos de dados históricos ou dados não necessários no momento para processamento.</p>
                            <br></br>

                            <p>Memória Principal – Há duas subdivisões básicas ou tipos de memória principal nos computadores atuais – memória de acesso randômico e memória read-only(somente para leitura). Temos também a memória flash, que não será abordada neste tema, pois as duas categorias abaixo são as mais antigas e mais comumente usadas.</p>
                            <br></br>

                        </article> : <></>}

                    {gabarito[6].exibir ?
                        <article>

                            <h2>RAM (RANDOM ACCESS MEMORY)
                            <span><VolumeUp onClick={() => play(midia_7)} className='volume' /></span>
                            </h2>

                            <p>A Memória de Acesso Randômico (RAM), do inglês Randomic Access Memory é usada para armazenamento temporário de dados ou instruções. Quando entramos com um programa em linguagem Basic em um computador pessoal, as instruções são armazenadas na RAM do computador, assim como os dados de entrada. A RAM também é conhecida como memória read-and-write, pois podemos escrever ou ler informações neste tipo de memória.</p>
                            <br></br>

                            <p>A capacidade da RAM do equipamento é vital, pois determina o número de instruções e a quantidade dos dados armazenados a cada vez para um processamento.</p>
                            <br></br>

                            <p>A memória RAM é volátil – ao desligarmos o equipamento perdem-se as informações.</p>
                            <br></br>

                            <p>Algumas variações da memória RAM são:</p>
                            <br></br>

                            <p><strong>SRAM(RAM ESTÁTICA)</strong> – As informações armazenadas, neste tipo de RAM, são mantidas com uma energia de alimentação (a fonte de energia elétrica deve ser mantida mesmo com o computador desligado).</p>
                            <br></br>

                            <p><strong>DRAM(RAM DINÂMICA)</strong> – Os dados nela carregados precisam de um reforço elétrico para não serem perdidos. É mais lenta que a memória SRAM.</p>
                            <br></br>

                        </article> : <></>}

                    {gabarito[7].exibir ?
                        <article>

                            <h2>ROM(READY ONLY MEMORY)
                                <span><VolumeUp onClick={() => play(midia_8)} className='volume' /></span>
                            </h2>

                            <p>A memória Read-Only(ROM), deriva do inglês Read Only Memory, é usada para armazenar instruções e/ou dados permanentes ou raramente alterados. A informação geralmente é colocada no chip de armazenamento quando ele é fabricado e o conteúdo da ROM não pode ser alterado por um programa do usuário.</p>
                            <br></br>

                            <p>As ROMs se constituem em um hardware que possui um software determinado e que não pode ser deletado pelo usuário.</p>
                            <br></br>

                            <p>As informações armazenadas na ROM não são voláteis, isto é, não são perdidas quando há falta de energia no computador.</p>
                            <br></br>

                            <p>Existem algumas variações e evoluções deste tipo de memória:</p>
                            <br></br>

                            <p><strong>PROM: </strong> É a ROM que pode ser programada uma única vez.</p>
                            <br></br>

                            <p><strong>EPROM: </strong> É a ROM que pode ser apagada com o uso da luz ultravioleta(podendo ser reprogramada)</p>
                            <br></br>

                            <p><strong>EEPROM: </strong> É a ROM que pode ser apagada ou programada através de impulsos elétricos.</p>
                            <br></br>

                            <p>Nas próximas lições veremos mais sobre os componentes básicos de um computador.</p>
                            <br></br>

                        </article> : <></>}
                </div>

                <br></br>

                <h1 className="rating-title">Você acha que esse sistema te ajudou a entender melhor o conteúdo?</h1>
                <br></br>
                <div className="rating">
                    <LikertScale saveAnswer={(answer) => saveRating(answer)} />
                </div>
                <button className="button" type="submit" onClick={submitRating}> Enviar Resposta</button>
            </div>
        </div>
    )
}