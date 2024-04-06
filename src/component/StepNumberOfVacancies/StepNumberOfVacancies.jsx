import './StepNumberOfVacancies.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import InputShort from '../InputShort/InputShort.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepNumberOfVacancies() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/workingconditions/typesofreward');

  return (
    <div className='number-vacancies section'>
      <div className='number-vacancies__input-container'>
        <InputShort
          errorMessage={errorMessage}
          inputType='number'
          inputName='amount_of_employees' // от бэка
          inputPlaceholder='Введите число сотрудников для поиска'
          value={data.amount_of_employees || ''} // от бэка
          onChange={handleChange}
        />
      </div>

      <div className='number-vacancies__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='number-vacancies__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='number-vacancies__button section__button-position'>
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

export default StepNumberOfVacancies
