import '../Input/Input.css'


function InputShort(props) {

  return (
    <input
      className={`input input_short ${props.errorMessage && 'input_error'}`}
      type={props.inputType}
      name={props.inputName}
      value={props.inputValue}
      onChange={props.onChange}
      placeholder={props.inputPlaceholder}
    />
  )
}

export default InputShort;