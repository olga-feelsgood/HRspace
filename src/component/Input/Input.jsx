import './Input.css';


function Input(props) {

  return (
    <input
      className={`input ${props.errorMessage && 'input_error'}`}
      type={props.inputType}
      name={props.inputName}
      value={props.inputValue}
      onChange={props.onChange}
      placeholder={props.inputPlaceholder}
    />
  )
}

export default Input;