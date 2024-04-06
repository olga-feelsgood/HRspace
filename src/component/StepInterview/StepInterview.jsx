import './StepInterview.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepInterview() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/workingconditions/firstinterviewdate');

  return (
    <div className='interview section'>
      <h2 className='interview__text'>Укажите, с какими кандидатами Вы бы хотели проводить собеседования самостоятельно:</h2>
      <div className='interview__radiobuttons'>
        <RadioButton
          radioTitle='Со всеми кандидатами, чьё резюме будет релевантным'
          radioValue='1'
          radioName='format_interview'//от бэка
          checked={data.format_interview == '1' ? true : false} //от бэка
          onChange={handleChange}
        />
        <RadioButton
          radioTitle='С кандидатами, прошедшими предварительный отбор'
          radioValue='2'
          radioName='format_interview'//от бэка
          checked={data.format_interview == '2' ? true : false} //от бэка
          onChange={handleChange}
        />
      </div>

      <div className='interview__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='interview__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='interview__button section__button-position'>
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

export default StepInterview
