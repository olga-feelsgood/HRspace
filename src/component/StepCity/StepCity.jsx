import './StepCity.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputShort from '../InputShort/InputShort.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepCity() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/officeremote');

  return (
    <div className='city section'>
      <div className='city__input-container'>
        <InputShort
          errorMessage={errorMessage}
          inputType='text'
          inputName='city' //от бэка
          inputPlaceholder='Введите название города'
        />
      </div>

      <div className='city__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='city__current-form section__currentform-position'>
        <CurrentForm />
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
