import './StepMoneyForRecruiters.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import InputShort from '../InputShort/InputShort.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepMoneyForRecruiters() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/workingconditions/candidatefirstworkingday');

  return (
    <div className='money-recruiters section'>
      <div className='money-recruiters__input-container'>
        <InputShort
          errorMessage={errorMessage}
          inputType='number'
          inputName='award' // от бэка
          inputPlaceholder='Введите размер вознаграждения'
          value={data.award || ''} // от бэка
          onChange={handleChange}
        />
      </div>

      <div className='money-recruiters__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='money-recruiters__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='money-recruiters__button section__button-position'>
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

export default StepMoneyForRecruiters
