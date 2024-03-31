import './StepSalary.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputShort from '../InputShort/InputShort.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepSalary() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/workinghours');

  return (
    <div className='salary section'>
      <h2 className="salary__title">Заработная плата до вычета НДФЛ</h2>

      <div className='salary__input-container'>
        <InputShort
          errorMessage={errorMessage}
          inputType='number'
          inputName='salary_from' // от бэка
          inputPlaceholder='От'
        />
        <InputShort
          errorMessage={errorMessage}
          inputType='number'
          inputName='salary_to' // от бэка
          inputPlaceholder='До'
        />
      </div>

      <div className='salary__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='salary__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='salary__button section__button-position'>
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

export default StepSalary
