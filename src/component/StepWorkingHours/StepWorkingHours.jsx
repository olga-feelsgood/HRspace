import './StepWorkingHours.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputShort from '../InputShort/InputShort.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepWorkingHours() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/employmenttype');

  return (
    <div className='working-hours section'>
      <div className='working-hours__input-container'>
        <InputShort
          errorMessage={errorMessage}
          inputType='time'
          inputName='start_work_day' // от бэка
          inputPlaceholder='Начало рабочего дня'
        />
        <InputShort
          errorMessage={errorMessage}
          inputType='time'
          inputName='end_work_day' // от бэка
          inputPlaceholder='Конец рабочего дня'
        />
      </div>

      <div className='working-hours__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='working-hours__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='working-hours__button section__button-position'>
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

export default StepWorkingHours
