import './StepCandidateFirstWorkingDay.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputShort from '../InputShort/InputShort.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepCandidateFirstWorkingDay() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/workingconditions/interview');

  return (
    <div className='candidate-firstday section'>
      <div className='candidate-firstday__input-container'>
        <InputShort
          errorMessage={errorMessage}
          inputType='date'
          inputName='start_work' // от бэка
          inputPlaceholder='ДД.ММ.ГГГГ'
        />
      </div>

      <div className='candidate-firstday__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='candidate-firstday__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='candidate-firstday__button section__button-position'>
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

export default StepCandidateFirstWorkingDay
