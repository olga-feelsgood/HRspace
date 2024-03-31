import './StepCheckBeforePayment.css'
// import '../Section/Section.css'
import '../Link/Link.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentForm from '../CurrentForm/CurrentForm.jsx'
import CheckBox from '../CheckBox/CheckBox.jsx'
import Error from '../Error/Error.jsx'
import Button from '../Button/Button.jsx'


function StepCheckBeforePayment() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/formsubmit');

  return (
    <div className='payment-check'>
      <div className='payment-check__container'>
        <h2 className='payment-check__title'>Проверь заявку для публикации</h2>

        <div className='payment-check__current-form'>
          <CurrentForm />
        </div>

        <div className='payment-check__checkbox'>
          <CheckBox
            checkboxTitle='Я принимаю условия «Оферты на заключение договора об использовании
      веб-сервиса HRspace»'
            checkboxValue='agree'
            checkboxName='oferta'//от бэка
          />
        </div>

        <div className='payment-check__error'>
          <Error errorMessage={errorMessage} />
        </div>

        <div className='payment-check__button'>
          <Button
            stepIsValid='true'
            buttonTitle='Сохранить черновик'
            buttonType='button'
          />
          <Button
            onClick={onRedirect}
            stepIsValid={stepIsValid}
            buttonTitle='Далее'
            buttonType='button'
          />
        </div>
      </div>
    </div >
  )
}

export default StepCheckBeforePayment