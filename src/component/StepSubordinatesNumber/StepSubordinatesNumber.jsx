import './StepSubordinatesNumber.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputShort from '../InputShort/InputShort.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepSubordinatesNumber() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/jobpeculiarities');

  return (
    <div className='subordinates-number section'>
      <div className='subordinates-number__input-container'>
        <InputShort
          errorMessage={errorMessage}
          inputType='number'
          inputName='amount_of_subordinate' // от бэка
          inputPlaceholder='Сотрудников в подчинении'
        />
      </div>

      <div className='subordinates-number__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='subordinates-number__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='subordinates-number__button section__button-position'>
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

export default StepSubordinatesNumber
