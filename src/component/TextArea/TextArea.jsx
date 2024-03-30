import './TextArea.css';


function TextArea(props) {

  return (
    <div className='text-area'>
      <textarea
        className={`text-area__input ${props.errorMessage && 'text-area__input_error'}`}
        name={props.textAreaName}
        value={props.textAreaValue}
        onChange={props.onChange}
        placeholder={props.textAreaPlaceholder}
        maxLength={props.textAreaMaxLength}
      />
      <span className='text-area__counter'>
        <span className='teaxt-area__counter_current'>{props.textAreaCurrentLength}</span>
        /
        <span className='text-area__counter_total'>{props.textAreaMaxLength}</span>
      </span>
    </div>
  )
}

export default TextArea;