import './StepHome.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Input from '../Input/Input.jsx'
import Error from '../Error/Error.jsx'
import Button from '../Button/Button.jsx'


function StepHome() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/warning');

  return (
    <div className='home'>
      <div className='home__container'>
        <h1 className='home__title'>Название вакансии</h1>
        <div className='home__input-container'>
          <Input
            errorMessage={errorMessage}
            inputType='text'
            inputName='name' //от бэка
            inputPlaceholder='Введите название вакансии'
            value={data.name || ''} //от бэка
            onChange={handleChange}
          />
        </div>

        <div className='home__error'>
          <Error errorMessage={errorMessage} />
        </div>

        <div className='home__button'>
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

export default StepHome;
