import './StepSkills.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Input from '../Input/Input.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepSkills() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/candidaterequirements/education');

  return (
    <div className='skills section'>
      <div className='skills__input-container'>
        <Input
          errorMessage={errorMessage}
          inputType='text'
          inputName='skill' //от бэка
          inputPlaceholder='Введите навык'
          value={data.skill || ''}
          onChange={handleChange}
        />
      </div>

      <div className='skills__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='skills__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='skills__button section__button-position'>
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

export default StepSkills
