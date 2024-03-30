import './StepSphere.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'


function StepSphere() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/city');

  return (
    <div className='sphere'>
      <div className='sphere__input-container'>
        <Input
          errorMessage={errorMessage}
          inputType='text'
          inputName='line_of_business'
          inputPlaceholder='Введите название сферы'
        />
      </div>

      <div className='sphere__button section__button-position'>
        <Button
          onClick={onRedirect}
          stepIsValid={stepIsValid}
          buttonTitle='Далее'
          buttonType='button'
        />
      </div>
    </div>
  );
}

export default StepSphere;

