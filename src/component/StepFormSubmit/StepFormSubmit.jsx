import './StepFormSubmit.css'
import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import Button from '../Button/Button.jsx'


function StepFormSubmit() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  return (
    <div className='form-submit section'>

      <div className='form-submit__button section__button-position'>
        <Button
          stepIsValid={stepIsValid}
          buttonTitle='Опубликовать'
          buttonType='submit'
        />
      </div>
    </div>
  )
}

export default StepFormSubmit
