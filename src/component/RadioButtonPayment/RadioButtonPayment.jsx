import '../RadioButton/RadioButton.css'
import './RadioButtonPayment.css'

function RadioButtonPayment(props) {

  return (
    <div className='radio-payment'>
      <label className='radio-payment__label-container'>
        <div className='radio-payment__label-name'>
          <div className='radio-payment__percentage-container'>
            <p className='radio-payment__percentage'>{props.radioLabelPercentage}</p>
            {props.radioLabelPercentage1 && <p className='radio-payment__percentage'>{props.radioLabelPercentage1}</p>}
          </div>
          <div className='radio-payment__title-container'>
            <p className='radio-payment__title'>{props.radioLabelTitle}</p>
            <p className='radio-payment__text'>{props.radioLabelText}</p>
          </div>
        </div>
        <input className='radio-payment__input radio-button__input' type="radio" name={props.radioName} id={props.radioLabel} value={props.radioValue} onChange={props.onChange} checked={props.checked} />
        <span className='radio-payment__custom radio-button__custom'></span>
      </label>
    </div>
  )
}

export default RadioButtonPayment;