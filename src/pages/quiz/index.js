import React, { Component } from 'react';
// import api from '../../services/api';
import './styles.css';
// import { Link } from 'react-router-dom';
import FontSizeChanger from 'react-font-size-changer'
import VolumeUp from '@material-ui/icons/VolumeUp';
// import Likert from 'react-likert-scale';
// import { render } from 'react-dom';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer1: 0,
            answer2: 0,
            answer3: 0,
            answer4: 0,
            answer5: 0,
            answer6: 0,
        };
    }

    //Execute when page loads
    componentDidMount() {

    }

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
                <VolumeUp />
                <form action="">
                    <ul className='likert' id={`${idNumber}`}>
                        <li>
                            <input type="radio" name="likert" value="1" onClick={this.submiteAnswer.bind(this, idNumber, 1)} />
                            <label>Concordo totalmente</label>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="2" onClick={this.submiteAnswer.bind(this, idNumber, 2)} />
                            <label>Concordo parcialmente</label>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="3" onClick={this.submiteAnswer.bind(this, idNumber, 3)} />
                            <label>Neutro</label>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="4" onClick={this.submiteAnswer.bind(this, idNumber, 4)} />
                            <label>Discordo parcialmente</label>
                        </li>
                        <li>
                            <input type="radio" name="likert" value="5" onClick={this.submiteAnswer.bind(this, idNumber, 5)} />
                            <label>Discordo totalmente</label>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }

    submiteAnswer = (pergunta, resposta) => {
        console.log("pergunta: " + pergunta);
        console.log("resposta: " + resposta);

        answers[pergunta-1] = resposta;
        console.log(answers);
        console.log();
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
                            stepSize: 2, //stepSize = font size
                            range: 4 //range = stepts to change
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
                    <button onClick={this.submiteAnswer}>Submit</button>
                </div>
            </div >
        );
    }
}

let questions = ['Você gosta de site com textos?',
    'Você prefere conteúdo que seja em vídeo?',
    'Você prefere conteúdo com audio?',
    'Você prefere texto grande?',
    'Você prefere que os vídeos tenham legendas?',
    'Você prefere que tenha?'];

let answers = [];

