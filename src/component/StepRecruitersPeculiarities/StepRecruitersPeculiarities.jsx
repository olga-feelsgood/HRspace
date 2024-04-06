import './StepRecruitersPeculiarities.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import TextArea from '../TextArea/TextArea.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import Error from '../Error/Error.jsx'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import Button from '../Button/Button.jsx'


function StepRecruitersPeculiarities() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/formpayment');

  const [currentInputLength, setCurrentInputLenght] = useState(0);

  function onChangeFunction(event) {
    setCurrentInputLenght(event.target.value.length);
    handleChange(event);
  }


  return (
    <div className='recruiters-peculiarities section'>
      <div className='recruiters-peculiarities__textarea-container'>
        <TextArea
          errorMessage={errorMessage}
          textAreaName='hr_requirements' //от бэка
          textAreaPlaceholder='Укажите специальные знания и навыки, которыми должен обладать рекрутер.Будут ли дополнительные задачи.

Это поможет рекрутерам оценить свою возможность закрытия заявки.
          
Не дублируйте ранее описанные пункты.'
          textAreaMaxLength='1000'
          textAreaCurrentLength={currentInputLength}
          onChange={onChangeFunction}
          value={data.hr_requirements || ''}  //от бэка
        />
      </div>

      <div className='recruiters-peculiarities__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='recruiters-peculiarities__checkbox'>
        <CheckBox
          checkboxTitle='Только для юридических лиц и ИП'
          checkboxValue='entity'
          checkboxName='hr_requirements1'//от бэка
          checked={data.hr_requirements1} //от бэка
          onChange={handleChange}
        />
        <CheckBox
          checkboxTitle='Только для самозанятых и фрилансеров'
          checkboxValue='freelancing'
          checkboxName='hr_requirements2'//от бэка
          checked={data.hr_requirements2} //от бэка
          onChange={handleChange}
        />
      </div>

      <div className='recruiters-peculiarities__current-form section__currentform-position'>
        <CurrentForm />
      </div>

      <div className='recruiters-peculiarities__button section__button-position'>
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

export default StepRecruitersPeculiarities
