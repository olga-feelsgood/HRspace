import './StepSubordinatesNumber.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button.jsx'


function StepSubordinatesNumber() {

    //пока что костыль, когда сделаем логику, будем брать из useFrom
    const [stepIsValid, setStepIsValid] = useState(true);

    let navigate = useNavigate();
    const onRedirect = () => navigate('/HRspace/jobdescription/jobpeculiarities');

  return (
    <div className='subordinates-number'>
            <div className='subordinates-number__button section__button-position'>
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

export default StepSubordinatesNumber
