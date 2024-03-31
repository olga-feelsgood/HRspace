import './StepYearsOfExperience.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepYearsOfExperience() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/candidaterequirements/skills');

  return (
    <div className='years-experience section'>
        <div className='years-experience__radiobuttons'>
          <RadioButton
            radioTitle='Не имеет значения'
            radioValue='doesnot_matter'
            radioName='work_experience'//от бэка
          />
          <RadioButton
            radioTitle='От 1 года до 3 лет'
            radioValue='from_one_to_three_years'
            radioName='work_experience'//от бэка
          />
          <RadioButton
            radioTitle='От 3 до 6 лет'
            radioValue='from_three_to_six_years'
            radioName='work_experience'//от бэка
          />
          <RadioButton
            radioTitle='Более 6 лет'
            radioValue='more_six_years'
            radioName='work_experience'//от бэка
          />
          <RadioButton
            radioTitle='Нет опыта'
            radioValue='without_experience'
            radioName='work_experience'//от бэка
          />
        </div>

        <div className='years-experience__error'>
          <Error errorMessage={errorMessage} />
        </div>

        <div className='years-experience__current-form section__currentform-position'>
          <CurrentForm />
        </div>

        <div className='years-experience__button section__button-position'>
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

      export default StepYearsOfExperience
