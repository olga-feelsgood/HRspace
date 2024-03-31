import './StepEducation.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepEducation() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/candidaterequirements/portfolio');

  return (
    <div className='education section'>
      <div className='education__radiobuttons'>
        <RadioButton
          radioTitle='Высшее'
          radioValue='higher'
          radioName='education'//от бэка
        />
        <RadioButton
          radioTitle='Среднее специальное'
          radioValue='secondary_special'
          radioName='education'//от бэка
        />
        <RadioButton
          radioTitle='Курсы'
          radioValue='courses'
          radioName='education'//от бэка
        />
      </div>

      <div className='education__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='education__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='education__button section__button-position'>
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

export default StepEducation
