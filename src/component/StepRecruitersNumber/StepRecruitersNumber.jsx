import './StepRecruitersNumber.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepRecruitersNumber() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/recruiterrequirements/recruiterstasks');

  return (
    <div className='recruiters-number section'>
      <h2 className='recruiters-number__text'>Укажите количество рекрутеров, которые будут работать над заявкой:</h2>

      <div className='recruiters-number__radiobuttons'>
        <RadioButton
          radioTitle='1'
          radioValue='1'
          radioName='amount_of_hr'//от бэка
          checked={data.amount_of_hr == '1' ? true : false} //от бэка
          onChange={handleChange}
        />
        <RadioButton
          radioTitle='2'
          radioValue='2'
          radioName='amount_of_hr'//от бэка
          checked={data.amount_of_hr == '2' ? true : false} //от бэка
          onChange={handleChange}
        />
        <RadioButton
          radioTitle='3'
          radioValue='3'
          radioName='amount_of_hr'//от бэка
          checked={data.amount_of_hrn == '3' ? true : false} //от бэка
          onChange={handleChange}
        />
      </div>

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
