import './StepOfficeRemote.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepOfficeRemote() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/salary');

  return (
    <div className='office-remote section'>
      <div className='office-remote__radiobuttons'>
        <RadioButton
          radioTitle='Удалённая'
          radioValue='remote'
          radioName='work_format'//от бэка
          checked={data.work_format == 'remote' ? true : false} //от бэка
          onChange={handleChange}
        />
        <RadioButton
          radioTitle='Гибрид'
          radioValue='mixed'
          radioName='work_format'//от бэка
          onChange={handleChange}
          checked={data.work_format == 'mixed' ? true : false} //от бэка
        />
        <RadioButton
          radioTitle='Офис'
          radioValue='office'
          radioName='work_format'//от бэка
          onChange={handleChange}
          checked={data.work_format == 'office' ? true : false} //от бэка
        />
      </div>

      <div className='office-remote__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='office-remote__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='office-remote__button section__button-position'>
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

export default StepOfficeRemote;
