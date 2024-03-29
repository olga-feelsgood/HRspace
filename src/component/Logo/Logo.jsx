import './Logo.css'
import '../Link/Link.css'
import logo from '../../images/header_logo.svg'
import { Link } from 'react-router-dom'


function Logo() {
  
  return (
    <Link to='/HRspace/'> <img className='logo link' src={logo} alt='логотип' /></Link>
  )
}

export default Logo