import './StepRecruitersTasks.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import CheckBox from '../CheckBox/CheckBox.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepRecruitersTasks() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/recruiterrequirements/recruiterspeculiarities');

  return (
    <div className='recruiters-tasks section'>
      <div className='recruiters-tasks__checkbox'>
        <CheckBox
          checkboxTitle='Подбор кандидатов'
          checkboxValue='1'
          checkboxName='hr_responsibility1'//от бэка
          checked={data.hr_responsibility1} //от бэка
          onChange={handleChange}
        />
        <CheckBox
          checkboxTitle='Организация собеседований'
          checkboxValue='2'
          checkboxName='hr_responsibility2'//от бэка
          checked={data.hr_responsibility2} //от бэка
          onChange={handleChange}
        />
        <CheckBox
          checkboxTitle='Проведение собеседований'
          checkboxValue='3'
          checkboxName='hr_responsibility3'//от бэка
          checked={data.hr_responsibility3} //от бэка
          onChange={handleChange}
        />
        <CheckBox
          checkboxTitle='Запрос рекомендаций'
          checkboxValue='4'
          checkboxName='hr_responsibility4'//от бэка
          checked={data.hr_responsibility4} //от бэка
          onChange={handleChange}
        />
        <CheckBox
          checkboxTitle='Отправка тестового задания'
          checkboxValue='5'
          checkboxName='hr_responsibility5'//от бэка
          checked={data.hr_responsibility5} //от бэка
          onChange={handleChange}
        />
      </div>

      <div className='recruiters-tasks__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='recruiters-tasks__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='recruiters-tasks__button section__button-position'>
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

export default StepRecruitersTasks
