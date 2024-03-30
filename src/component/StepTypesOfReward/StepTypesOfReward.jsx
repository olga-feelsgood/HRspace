import './StepTypesOfReward.css'
import '../Section/Section.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RadioButtonPayment from '../RadioButtonPayment/RadioButtonPayment.jsx'
import Button from '../Button/Button.jsx'


function StepTypesOfReward() {

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsValid, setStepIsValid] = useState(true);

  let navigate = useNavigate();
  const onRedirect = () => navigate('/HRspace/workingconditions/moneyforrecruiters');

  return (
    <div className='types-reward section'>

      <div className='types-reward__radiobuttons'>
        <RadioButtonPayment
          radioLabel='1'
          radioLabelPercentage='100%'
          radioLabelTitle='За выход сотрудника'
          radioLabelText='При этом варианте вознаграждение рекрутер получит в день вступления кандидата в должность'
          radioValue='1'
          radioName='award_option'//от бэка
        />

        <RadioButtonPayment
          radioLabel='2'
          radioLabelPercentage='50%'
          radioLabelPercentage1='50%'
          radioLabelTitle='50% за выход + 50% по окончании гарантийного периода'
          radioLabelText='Часть оплаты рекрутер получает в день вступления кандидата в должность, а часть оплаты — после окончания гарантийного периода (1 месяц)'
          radioValue='2'
          radioName='award_option'//от бэка
        />

        <RadioButtonPayment
          radioLabel='3'
          radioLabelPercentage='100%'
          radioLabelTitle='По окончании гарантийного периода (1 месяц)'
          radioLabelText='В этом случае рекрутер получаеь оплату спустя месяц нахождения кандидата в должности'
          radioValue='3'
          radioName='award_option'//от бэка
        />
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