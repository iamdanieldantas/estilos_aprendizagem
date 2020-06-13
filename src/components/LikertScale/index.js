import React from 'react'
import VolumeUp from '@material-ui/icons/VolumeUp';

const LikertScaleItem = ({ labelText, id, onClick }) => (
  <li>
    <input type="radio" name="likert" value={id.toString()} onClick={onClick} />
    <label>{ labelText }</label>
  </li>
)

const likertScaleItems = [
  { labelText: "Discordo totalmente", id: 1 },
  { labelText: "Discordo parcialmente", id: 2 },
  { labelText: "Neutro", id: 3 },
  { labelText: "Concordo parcialmente", id: 4 },
  { labelText: "Concordo totalmente", id: 5 }
]

const LikertScale = ({ idNumber, saveAnswer, play }) => {
  return (
      <div className="wrap">
          <VolumeUp onClick={() => play()} className='volume'/>

          <form action="">
              <ul className='likert' id={`${idNumber}`}>
                {likertScaleItems.map(
                  (item, index) => <LikertScaleItem onClick={() => saveAnswer(item.id)} key={`likert-scale-${index}`} {...item} />
                )}                  
              </ul>
          </form>
      </div>
  )
}
export default LikertScale

