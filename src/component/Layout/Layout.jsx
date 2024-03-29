import './Layout.css'
import {Outlet} from 'react-router-dom'
import Header from '../Header/Header.jsx'

function Layout() {

  return (
    <>
      <header className='header'><Header/></header>
      <main>
        <section className='progress-bar'>ProgressBar</section>
        <section className='side-bar'>SideBar</section>
        <form className='form'><Outlet/></form>
      </main>
    </>
  )
}

export default Layout