import './StepBusinessTrips.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepBusinessTrips() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/subordinatesnumber');

  return (
    <div className='business-trips section'>
      <div className='business-trips__radiobuttons'>
        <RadioButton
          radioTitle='Да'
          radioValue='yes'
          radioName='business_trip'//от бэка
        />
        <RadioButton
          radioTitle='Нет'
          radioValue='no'
          radioName='business_trip'//от бэка
        />
        <RadioButton
          radioTitle='Иногда'
          radioValue='sometimes'
          radioName='business_trip'//от бэка
        />
      </div>

      <div className='business-trips__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='business-trips__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='business-trips__button section__button-position'>
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

export default StepBusinessTrips
