import React, { useState } from 'react';
import Header from '../../components/Header';
import FontSizeChanger from 'react-font-size-changer'
import QuizQuestions from '../../components/QuizQuestions'

import { questions } from './questions'
import './styles.css';

const Main = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const header = "Questionário de Estilo de Aprendizagem";
    console.log(answers)

    const saveAnswer = (idQuestion, idAnswer) => {
        setAnswers(prevAnswer => prevAnswer.map(
            (val, i) => i === idQuestion - 1 ?
                idAnswer > 3 ? 1 : 0
                : val
        ))
    }

    const emptyAnswer = () => {
        console.log("Quesitonário não completo");
        return alert("Há campos vazíos no questionário");
    }

    const submiteAnswer = () => {
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

    const checkAnswer = () => {
        const answerOk = !answers.some(ans => ans === null)

        if (answerOk) return submiteAnswer();
        return emptyAnswer();

    }

    return (
        

        <div className='quiz-container' >
            <Header header={header} />
            <i className="far fa-play-circle"></i>
            <i className="far fa-play-circle"></i>
            <div className="app">
                <FontSizeChanger className="expand-button"
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
                            
                            {questions.map((question, index) =>
                                <QuizQuestions
                                    {...question}
                                    key={`quiz-question-${index}`}
                                    indexQuestion={index + 1}
                                    saveAnswer={saveAnswer} />
                            )}
                        </tbody>

                    </table>
                </div>
            </div>

            <div className="actions" >
                <button className="button" onClick={checkAnswer}>Enviar</button>
            </div>
        </div >
    );
}

export default Main
