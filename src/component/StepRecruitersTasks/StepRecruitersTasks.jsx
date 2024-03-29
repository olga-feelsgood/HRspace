import './StepRecruitersTasks.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckBox from '../CheckBox/CheckBox.jsx'
import Button from '../Button/Button.jsx'


function StepRecruitersTasks() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/recruiterrequirements/recruiterspeculiarities');

  return (
    <div className='recruiters-tasks section'>
      <div className='recruiters-tasks__checkbox'>
        <CheckBox
          checkboxLabel='1'
          checkboxTitle='Подбор кандидатов'
          checkboxValue='1'
          checkboxName='hr_responsibility1'//от бэка
        />
        <CheckBox
          checkboxLabel='2'
          checkboxTitle='Организация собеседований'
          checkboxValue='2'
          checkboxName='hr_responsibility2'//от бэка
        />
        <CheckBox
          checkboxLabel='3'
          checkboxTitle='Проведение собеседований'
          checkboxValue='3'
          checkboxName='hr_responsibility3'//от бэка
        />
        <CheckBox
          checkboxLabel='4'
          checkboxTitle='Запрос рекомендаций'
          checkboxValue='4'
          checkboxName='hr_responsibility4'//от бэка
        />
        <CheckBox
          checkboxLabel='5'
          checkboxTitle='Отправка тестового задания'
          checkboxValue='5'
          checkboxName='hr_responsibility5'//от бэка
        />
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
