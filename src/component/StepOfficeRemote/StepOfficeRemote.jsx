import './StepOfficeRemote.css'
import '../Section/Section.css'
import RadioButton from '../RadioButton/RadioButton.jsx'

function StepOfficeRemote() {

  return (
    <div className='office-remote section'>
      <div className='office-remote__radiobuttons'>
        <RadioButton
          radioLabel='remote'
          radioTitle='Удалённая'
          radioValue='remote'
          radioName='work_format'//от бэка
        />
        <RadioButton
          radioLabel='mixed'
          radioTitle='Гибрид'
          radioValue='mixed'
          radioName='work_format'//от бэка
        />
        <RadioButton
          radioLabel='office'
          radioTitle='Офис'
          radioValue='office'
          radioName='work_format'//от бэка
        />
      </div>
    </div>
  )
}

export default StepOfficeRemote;
