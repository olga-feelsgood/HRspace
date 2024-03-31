import './CurrentForm.css'
import '../Link/Link.css'
import { NavLink } from 'react-router-dom'


function CurrentForm() {

  return (
    <div className='current-form'>
      <div className='current-form__container'>
        <h2 className='current-form__title'>Текущая заявка «Бухгалтер на производство»</h2>
        <button
          className='current-form__button link'
          type='button'>
        </button>
      </div>
      <div className='current-form__links'>
        <NavLink to='/' className='current-form__link link'>Строительство</NavLink>
        <NavLink to='/' className='current-form__link link'>Москва</NavLink>
      </div>
    </div>
  )
}

export default CurrentForm;