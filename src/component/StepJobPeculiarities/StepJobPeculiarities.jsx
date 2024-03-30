import './StepJobPeculiarities.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextArea from '../TextArea/TextArea.jsx'
import Button from '../Button/Button.jsx'


function StepJobPeculiarities() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/candidaterequirements/yearsofexperience');

  const [currentInputLength, setCurrentInputLenght] = useState(0);

  function onChangeFunction(event) {
    setCurrentInputLenght(event.target.value.length)
  }

  return (
    <div className='job-peculiarities section'>

      <div className='job-peculiarities__textarea-container'>
        <TextArea
          errorMessage={errorMessage}
          textAreaName='features_vacancy' //от бэка
          textAreaPlaceholder='Например, Вы ищете сотрудника для запуска нового проекта.
          
Не дублируйте ранее описанные пункты.'
          textAreaMaxLength='1000'
          textAreaCurrentLength={currentInputLength}
          onChange={onChangeFunction}
        />
      </div>

      <div className='job-peculiarities__button section__button-position'>
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

export default StepJobPeculiarities
