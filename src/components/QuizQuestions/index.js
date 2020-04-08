import React from 'react';
import LikertScale from '../../components/LikertScale'

const QuizQuestions = ({ indexQuestion, txtQuestion, audioFile, saveAnswer }) => {
  const audio = new Audio(audioFile);

  return <>
    <tr>
      <td>
        <div className="target-font-size">
          <strong className="container">{`${indexQuestion}: ${txtQuestion}`}</strong>
        </div>
        <LikertScale
          idNumber={indexQuestion}
          saveAnswer={(answer) => saveAnswer(indexQuestion, answer)}
          play={() => audio.play()} />
      </td>
    </tr>
  </>

};
export default QuizQuestions
