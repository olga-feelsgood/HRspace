import './CheckBox.css'
import { useLocation } from 'react-router-dom'

function CheckBox(props) {

  let { pathname } = useLocation();

  return (
    <div className='checkbox'>
      <label className='checkbox__label'>
        <input className='checkbox__input' type="checkbox" name={props.checkboxName} id={props.checkboxValue} value={props.checkboxValue} onChange={props.onChange} checked={props.checked} />
        {pathname !== '/HRspace/formpayment'
          ? <span className='checkbox__custom'></span>
          : <span className='checkbox__custom checkbox__custom_lower'></span>}
        {props.checkboxTitle}
      </label>
    </div>
  )
}

export default CheckBox;