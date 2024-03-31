import './RadioButton.css';

function RadioButton(props) {

  return (
    <div className='radio-button'>
      <label className='radio-button__label'>
        <input className='radio-button__input' type="radio" name={props.radioName} id={props.radioValue} value={props.radioValue} onChange={props.onChange} checked={props.checked} />
        <span className='radio-button__custom'></span>
        {props.radioTitle}
      </label>
    </div>
  )
}

export default RadioButton;