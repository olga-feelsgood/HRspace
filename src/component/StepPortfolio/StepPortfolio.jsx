import './StepPortfolio.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepPortfolio() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/workingconditions/numberofvacancies');

  return (
    <div className='portfolio section'>
      <div className='portfolio__radiobuttons'>
        <RadioButton
          radioTitle='Необходимо предоставить'
          radioValue='is_required'
          radioName='portfolio'//от бэка
        />
        <RadioButton
          radioTitle='Не требуется'
          radioValue='not_required'
          radioName='portfolio'//от бэка
        />
      </div>

      <div className='portfolio__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='portfolio__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='portfolio__button section__button-position'>
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

export default StepPortfolio
