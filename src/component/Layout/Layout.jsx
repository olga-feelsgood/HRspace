import './Layout.css'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import ProgressBar from '../ProgressBar/ProgressBar.jsx'
import SideBar from '../SideBar/SideBar.jsx'

function Layout() {

  let { pathname } = useLocation();

  return (
    <>
      <header className='header'><Header /></header>
      <main className='main'>
        <section className='progress-bar'><ProgressBar /></section>

        {pathname === '/HRspace/formpayment' ||
          pathname === '/HRspace/formsubmit'
          ? <div className='main__container'>
            <form className='form form_full-page'><Outlet /></form>
          </div>
          : <div className='main__container'>
            <section className='side-bar'><SideBar /></section>
            <form className='form'><Outlet /></form>
          </div>}
      </main>
    </>
  )
}

export default Layout