import './StepRecruitersPeculiarities.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextArea from '../TextArea/TextArea.jsx'
import Button from '../Button/Button.jsx'


function StepRecruitersPeculiarities() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/formpayment');

  const [currentInputLength, setCurrentInputLenght] = useState(0);

  function onChangeFunction(event) {
    setCurrentInputLenght(event.target.value.length)
  }


  return (
    <div className='recruiters-peculiarities section'>

      <div className='recruiters-peculiarities__textarea-container'>
        <TextArea
          errorMessage={errorMessage}
          textAreaName='hr_requirements' //от бэка
          textAreaPlaceholder='Укажите специальные знания и навыки, которыми должен обладать рекрутер.Будут ли дополнительные задачи.

Это поможет рекрутерам оценить свою возможность закрытия заявки.
          
Не дублируйте ранее описанные пункты.'
          textAreaMaxLength='1000'
          textAreaCurrentLength={currentInputLength}
          onChange={onChangeFunction}
        />
      </div>


      <div className='recruiters-peculiarities__button section__button-position'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </div>
  )
}

export default StepRecruitersPeculiarities
