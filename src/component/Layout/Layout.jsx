import './Layout.css'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import ProgressBar from '../ProgressBar/ProgressBar.jsx'
import SideBar from '../SideBar/SideBar.jsx'

function Layout() {

  return (
    <>
      <header className='header'><Header /></header>
      <main className='main'>
        <section className='progress-bar'><ProgressBar /></section>
        <div className='main__container'>
          <section className='side-bar'><SideBar /></section>
          <form className='form'><Outlet /></form>
        </div>
      </main>
    </>
  )
}

export default Layout