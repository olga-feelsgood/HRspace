import './StepFirstInterviewDate.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'

function StepFirstInterviewDate() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/recruiterrequirements/recruitersnumber');

  return (
    <div className='interview-date section'>

      <div className='interview-date__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='interview-date__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='interview-date__button section__button-position'>
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

export default StepFirstInterviewDate