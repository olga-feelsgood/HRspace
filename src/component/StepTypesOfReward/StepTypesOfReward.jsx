import './StepTypesOfReward.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import RadioButtonPayment from '../RadioButtonPayment/RadioButtonPayment.jsx'
import Error from '../Error/Error.jsx'
import Button from '../Button/Button.jsx'


function StepTypesOfReward() {

  const { data, handleChange } = useForm();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/workingconditions/moneyforrecruiters');

  return (
    <div className='types-reward'>

      <div className='types-reward__radiobuttons'>
        <RadioButtonPayment
          radioLabel='1'
          radioLabelPercentage='100%'
          radioLabelTitle='За выход сотрудника'
          radioLabelText='При этом варианте вознаграждение рекрутер получит в день вступления кандидата в должность'
          radioValue='1'
          radioName='award_option'//от бэка
          checked={data.award_option == '1' ? true : false} //от бэка
          onChange={handleChange}
        />

        <RadioButtonPayment
          radioLabel='2'
          radioLabelPercentage='50%'
          radioLabelPercentage1='50%'
          radioLabelTitle='50% за выход + 50% по окончании гарантийного периода'
          radioLabelText='Часть оплаты рекрутер получает в день вступления кандидата в должность, а часть оплаты — после окончания гарантийного периода (1 месяц)'
          radioValue='2'
          radioName='award_option'//от бэка
          checked={data.award_option == '2' ? true : false} //от бэка
          onChange={handleChange}
        />

        <RadioButtonPayment
          radioLabel='3'
          radioLabelPercentage='100%'
          radioLabelTitle='По окончании гарантийного периода (1 месяц)'
          radioLabelText='В этом случае рекрутер получаеь оплату спустя месяц нахождения кандидата в должности'
          radioValue='3'
          radioName='award_option'//от бэка
          checked={data.award_option == '3' ? true : false} //от бэка
          onChange={handleChange}
        />
      </div>

      <div className='types-reward__error'>
        <Error errorMessage={errorMessage} />
      </div>

      <div className='types-reward__button section__button-position'>
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

export default StepTypesOfReward