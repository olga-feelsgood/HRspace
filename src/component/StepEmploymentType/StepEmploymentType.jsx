import './StepEmploymentType.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import RadioButton from '../RadioButton/RadioButton.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'

function StepEmploymentType() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/jobdescription/businesstrips');

  return (
    <div className='employment-type section'>
      <div className='employment-type__radiobuttons'>
        <RadioButton
          radioTitle='Полная'
          radioValue='full'
          radioName='type_employment'//от бэка
          checked={data.type_employment == 'full' ? true : false} //от бэка
          onChange={handleChange}
        />
        <RadioButton
          radioTitle='Частичная'
          radioValue='partial'
          radioName='type_employment'//от бэка
          checked={data.type_employment == 'partial' ? true : false} //от бэка
          onChange={handleChange}
        />
        <RadioButton
          radioTitle='Проектная'
          radioValue='project'
          radioName='type_employment'//от бэка
          checked={data.type_employment == 'project' ? true : false} //от бэка
          onChange={handleChange}
        />
        <RadioButton
          radioTitle='Стажировка'
          radioValue='internship'
          radioName='type_employment'//от бэка
          checked={data.type_employment == 'internship' ? true : false} //от бэка
          onChange={handleChange}
        />
      </div>

      <div className='employment-type__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='employment-type__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='employment-type__button section__button-position'>
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

export default StepEmploymentType