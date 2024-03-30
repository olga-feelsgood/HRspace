import './StepCity.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputShort from '../InputShort/InputShort.jsx'
import Button from '../Button/Button.jsx'

function StepCity() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/officeremote');

  return (
    <div className='city'>
      <div className='city__input-container'>
        <InputShort
          errorMessage={errorMessage}
          inputType='text'
          inputName='city'
          inputPlaceholder='Введите название города'
        />
      </div>

      <div className='city__button section__button-position'>
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

export default StepCity
