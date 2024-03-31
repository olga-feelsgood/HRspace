import './StepRecruitersNumber.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepRecruitersNumber() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/recruiterrequirements/recruiterstasks');

  return (
    <div className='recruiters-number section'>

      <div className='recruiters-number__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='recruiters-number__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='recruiters-number__button section__button-position'>
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

export default StepRecruitersNumber
