import './Header.css'
import '../Link/Link.css'
import avatar from '../../images/header_avatar.svg'
import Logo from '../Logo/Logo.jsx'


function Header() {
  return (
    <div className='header__container'>

      <div className='header__logo-container'>
        <Logo />
      </div>

      <nav className='header__menu'>
        <ul className='header__links'>
          <li>
            <a target='_blank' href='/' className='header__link link' rel='noreferrer'>Главная</a>
          </li>
          <li>
            <a target='_blank' href='/' className='header__link link' rel='noreferrer'>Мои заявки</a>
          </li>
          <li>
            <a target='_blank' href='/' className='header__link link' rel='noreferrer'>Помощь</a>
          </li>
        </ul>
      </nav>

      <div className='header__profile'>
        <button
          className='header__icon header__icon_heart link'
          type='button'>
        </button>

        <button
          className='header__icon header__icon_alarm link'
          type='button'>
        </button>

        <div className='header__avatar'>
          <img className='header__avatar-photo'
            src={avatar}
            alt='Фото профиля' />
        </div>

        <div className='header__user'>
          <p className='header__user-name'>
            Анастасия Волошина
            <button
              className='header__icon header__icon_choose-user link'
              type='button'>
            </button>
          </p>
          <p className='header__user-position'>
            #67334 Заказчик</p>
        </div>

      </div>
    </div>
  )
}

export default Header
