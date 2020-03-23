import React, { Component } from 'react';
import './styles.css';
import FontSizeChanger from 'react-font-size-changer'
import VolumeUp from '@material-ui/icons/VolumeUp';

//import audio files
import question_1 from '../../assets/audios/question_1.m4a'
import question_2 from '../../assets/audios/question_2.m4a'
import question_3 from '../../assets/audios/question_3.m4a'
import question_4 from '../../assets/audios/question_4.m4a'
import question_5 from '../../assets/audios/question_5.m4a'
import question_6 from '../../assets/audios/question_6.m4a'
import question_7 from '../../assets/audios/question_7.m4a'
import question_8 from '../../assets/audios/question_8.m4a'
import question_9 from '../../assets/audios/question_9.m4a'
import question_10 from '../../assets/audios/question_10.m4a'
import question_11 from '../../assets/audios/question_11.m4a'
import question_12 from '../../assets/audios/question_12.m4a'

export default class Main extends Component {
    playFlag = false;
    constructor(props) {
        super(props);
        this.state = {

            play: false,
            pause: true
      
          };
      
          this.url = question_1;
        //   this.audio = new Audio(this.url);

        this.play = this.play.bind(this);

        this.emptyAnswer = this.emptyAnswer.bind(this);
        this.submiteAnswer = this.submiteAnswer.bind(this);
    }



    //Execute when page loads
    componentDidMount() {
        // this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    // componentWillUnmount() {
    //     this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    //   }

    //   togglePlay = () => {
    //     this.setState({ play: !this.state.play }, () => {
    //       this.state.play ? this.audio.play() : this.audio.pause();
    //     });
    //   }

    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < questions.length; i++) {
            let children = []
            //Inner loop to create children
            children.push(<td>{`${i + 1}: ${questions[i]}`}</td>)
            //Create the parent and add the children
            table.push(<tr>{children}</tr>);
            table.push(<i className="audio-icon far fa-play-circle"></i>);
            table.push(this.createLikertScale(i + 1));
        }
        return table
    }

    createLikertScale = (idNumber) => {
        return (
            <div className="wrap">
                <VolumeUp onClick={() => this.play(idNumber)}/>
                <form action="">
                    <ul className='likert' id={`${idNumber}`}>
                        <li>
                            <input type="radio" name="likert" value="1" onClick={this.saveAnswer.bind(this, idNumber, 1)} />
                            <label>Discordo totalmente</label>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="2" onClick={this.saveAnswer.bind(this, idNumber, 2)} />
                            <label>Discordo parcialmente</label>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="3" onClick={this.saveAnswer.bind(this, idNumber, 3)} />
                            <label>Neutro</label>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="4" onClick={this.saveAnswer.bind(this, idNumber, 4)} />
                            <label>Concordo parcialmente</label>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="5" onClick={this.saveAnswer.bind(this, idNumber, 5)} />
                            <label>Concordo totalmente</label>
                        </li>
                    </ul>
                </form>
                <hr></hr>
            </div>
        )
    }

    checkAnswer = () => {
        let answerOk = true;

        answers.map(ans => ans === null ? (answerOk = false) : console.log(ans));

        if (answerOk) return this.submiteAnswer();
        return this.emptyAnswer();

    }

    emptyAnswer = () => {
        console.log("Quesitonário não completo");
        return alert("Há campos vazíos no questionário");
    }

    saveAnswer = (pergunta, resposta) => {
        if (resposta > 3) {
            answers[pergunta - 1] = 1;
        } else {
            answers[pergunta - 1] = 0;
        }
    }

    submiteAnswer = () => {
        let visual = answers[0] + answers[3] + answers[6] + answers[9];
        let auditivo = answers[1] + answers[4] + answers[7] + answers[10];
        let motor = answers[2] + answers[5] + answers[8] + answers[11];

        if (visual > auditivo && visual > motor) {
            alert("Visual");
        } else if (auditivo > motor) {
            alert("Auditivo");
        } else {
            alert("Motor");
        }
    }

    play = (id) => {
        this.playFlag = !this.playFlag;
        let audio = new Audio(audios[id-1]);

        if(this.playFlag) audio.play();
        else audio.pause();

    }

    //Keep listening to var state 
    render() {
        return (
            <div className='questions-list' >
                <i className="far fa-play-circle"></i>
                <i className="far fa-play-circle"></i>
                <div className="app">
                    <FontSizeChanger
                        targets={['#target .content']}
                        onChange={(element, newValue, oldValue) => {
                            console.log(element, newValue, oldValue);
                        }}

                        options={{
                            stepSize: 2,
                            range: 4
                        }}
                        customButtons={{
                            up: <span style={{ 'fontSize': '36px' }}>A</span>,
                            down: <span style={{ 'fontSize': '20px' }}>A</span>,
                            style: {
                                backgroundColor: 'red',
                                color: 'white',
                                WebkitBoxSizing: 'border-box',
                                WebkitBorderRadius: '5px',
                                width: '60px'
                            },
                            buttonsMargin: 10
                        }}
                    />
                    <div id="target">
                        <p className="title">Responda o questionário abaixo:</p>
                        <table className="content">
                            <thead>

                            </thead>
                            <tbody>
                                {this.createTable()}
                            </tbody>

                        </table>
                    </div>
                </div>

                <div className="actions" >
                    <button onClick={this.checkAnswer}>Submit</button>
                </div>
            </div >
        );
    }
}

let questions = [
    'Você prefere site com textos?',
    'Você prefere conteúdo que seja em vídeo?',
    'Você gosta de anotar as coisas?',
    'Você prefere texto grande?',
    'Você prefere conteúdo com audio?',

    'Você tem dificuldade em praticar atividades físicas?',
    'Você gosta de conteúdo com imagens?',
    'ocê prefere que os vídeos tenham legendas?',
    'Você tem dificuldade em utilizar mouse?',

    'Você tem dificulade com leitura?',
    'Você tem dificuldade em ouvir música?',
    'Você tem dificuldade em locomover?'];

let answers = [null, null, null, null,
               null, null, null, null,
               null, null, null, null];

let audios = [ 
    question_1, question_2, question_3, question_4,
    question_5, question_6, question_7, question_8,
    question_9, question_10, question_11, question_12
]


