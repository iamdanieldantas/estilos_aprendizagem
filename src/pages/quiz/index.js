import React, { useState } from 'react';
import FontSizeChange from '../../components/FontSizeChange';
import QuizQuestions from '../../components/QuizQuestions';
import Header from '../../components/Header';


import { questions } from './questions';
import './styles.css';

const Main = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

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
            <Header/>
            <FontSizeChange/>
            
            <div className="form_quiz">
                <p className="title">Responda o questionário abaixo:</p>
                <table className="container">
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

            <div className="text-center">
                <button type="button" className="button" onClick={checkAnswer}>Enviar</button>
            </div>
        </div >
    );
}
export default Main

