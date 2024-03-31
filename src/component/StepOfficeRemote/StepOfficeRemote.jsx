import './StepOfficeRemote.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepOfficeRemote() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/salary');

  return (
    <div className='office-remote section'>
      <div className='office-remote__radiobuttons'>
        <RadioButton
          radioLabel='remote'
          radioTitle='Удалённая'
          radioValue='remote'
          radioName='work_format'//от бэка
        />
        <RadioButton
          radioLabel='mixed'
          radioTitle='Гибрид'
          radioValue='mixed'
          radioName='work_format'//от бэка
        />
        <RadioButton
          radioLabel='office'
          radioTitle='Офис'
          radioValue='office'
          radioName='work_format'//от бэка
        />
      </div>
      <div className='office-remote__error'>
        <Error errorMessage = {errorMessage}/>
      </div>

      <div className='office-remote__current-form section__currentform-position'>
        <CurrentForm
        currentLink='/'/>
      </div>

      <div className='office-remote__button section__button-position'>
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

export default StepOfficeRemote;
