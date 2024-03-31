import './StepWarning.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button.jsx'


function StepWarning() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/sphere');

  return (
    <div className='warning section'>
      <div className='warning__container'>
        <h2 className='warning__title'>Заполните все поля заявки максимально подробно.</h2>
        <p className='warning__text'>Это поможет ускорить процесс поиска кандидата <br />и сделает его максимально релевантным вашему запросу.</p>

        <div className='warning__button'>
          <Button
            onClick={onRedirect}
            stepIsValid={stepIsValid}
            buttonTitle='Далее'
            buttonType='button'
          />
        </div>
      </div>
    </div>
  )
}

export default StepWarning
