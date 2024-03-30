import './StepCheckBeforePayment.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button.jsx'

function StepCheckBeforePayment() {

    //пока что костыль, когда сделаем логику, будем брать из useFrom
    const [stepIsValid, setStepIsValid] = useState(true);

    let navigate = useNavigate();
    const onRedirect = () => navigate('/HRspace/formsubmit');

  return (
    <div className='payment-check'>
            <div className='payment-check__button section__button-position'>
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

export default StepCheckBeforePayment