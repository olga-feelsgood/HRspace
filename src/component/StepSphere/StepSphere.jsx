import './StepSphere.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Input from '../Input/Input.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepSphere() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/city');

  return (
    <div className='sphere section'>
      <div className='sphere__input-container'>
        <Input
          errorMessage={errorMessage}
          inputType='text'
          inputName='line_of_business' //от бэка
          inputPlaceholder='Введите название сферы'
          value={data.line_of_business || ''} //от бэка
          onChange={handleChange}
        />
      </div>

      <div className='sphere__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='sphere__current-form section__currentform-position'>
        <CurrentForm />
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

