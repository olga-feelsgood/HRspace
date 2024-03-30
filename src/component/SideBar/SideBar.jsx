import '../SideBar/SideBar.css'
import '../Link/Link.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

function SideBarJobDescription() {

  let { pathname } = useLocation();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsActive, setStepIsActive] = useState(false);

  return (
    <>
      {pathname === '/HRspace/' ||
        pathname === '/HRspace/jobdescription' ||
        pathname === '/HRspace/jobdescription' ||
        pathname === '/HRspace/jobdescription/warning' ||
        pathname === '/HRspace/jobdescription/sphere' ||
        pathname === '/HRspace/jobdescription/city' ||
        pathname === '/HRspace/jobdescription/officeremote' ||
        pathname === '/HRspace/jobdescription/salary' ||
        pathname === '/HRspace/jobdescription/workinghours' ||
        pathname === '/HRspace/jobdescription/employmenttype' ||
        pathname === '/HRspace/jobdescription/businesstrips' ||
        pathname === '/HRspace/jobdescription/subordinatesnumber' ||
        pathname === '/HRspace/jobdescription/jobpeculiarities' ||
        stepIsActive


        ? (< nav className='side-bar__container'>
          <NavLink to='/HRspace/jobdescription/sphere'
            className={pathname !== '/HRspace/jobdescription/sphere'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Сфера</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/jobdescription/city'
            className={pathname !== '/HRspace/jobdescription/city'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Город</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/jobdescription/officeremote'
            className={pathname !== '/HRspace/jobdescription/officeremote'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Формат работы</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/jobdescription/salary'
            className={pathname !== '/HRspace/jobdescription/salary'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Заработная плата</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/jobdescription/workinghours'
            className={pathname !== '/HRspace/jobdescription/workinghours'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>График работы</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/jobdescription/employmenttype'
            className={pathname !== '/HRspace/jobdescription/employmenttype'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Тип занятости</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/jobdescription/businesstrips'
            className={pathname !== '/HRspace/jobdescription/businesstrips'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Командировки</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/jobdescription/subordinatesnumber'
            className={pathname !== '/HRspace/jobdescription/subordinatesnumber'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Сотрудников в подчинении</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/jobdescription/jobpeculiarities'
            className={pathname !== '/HRspace/jobdescription/jobpeculiarities'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Особенности вакансии</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
        </nav >)
        : undefined}

      {pathname === '/HRspace/candidaterequirements/yearsofexperience' ||
        pathname === '/HRspace/candidaterequirements/skills' ||
        pathname === '/HRspace/candidaterequirements/education' ||
        pathname === '/HRspace/candidaterequirements/portfolio' ||
        stepIsActive

        ? (<nav className='side-bar__container'>
          <NavLink to='/HRspace/candidaterequirements/yearsofexperience'
            className={pathname !== '/HRspace/candidaterequirements/yearsofexperience'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Опыт работы</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/candidaterequirements/skills'
            className={pathname !== '/HRspace/candidaterequirements/skills'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Навыки</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/candidaterequirements/education'
            className={pathname !== '/HRspace/candidaterequirements/education'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Образование</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/candidaterequirements/portfolio'
            className={pathname !== '/HRspace/candidaterequirements/portfolio'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Портфолио</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
        </nav >)
        : undefined}

      {pathname === '/HRspace/workingconditions/numberofvacancies' ||
        pathname === '/HRspace/workingconditions/typesofreward' ||
        pathname === '/HRspace/workingconditions/moneyforrecruiters' ||
        pathname === '/HRspace/workingconditions/candidatefirstworkingday' ||
        pathname === '/HRspace/workingconditions/interview' ||
        pathname === '/HRspace/workingconditions/firstinterviewdate' ||
        stepIsActive

        ? (<nav className='side-bar__container'>
          <NavLink to='/HRspace/workingconditions/numberofvacancies'
            className={pathname !== '/HRspace/workingconditions/numberofvacancies'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Количество сотрудников для поиска</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/workingconditions/typesofreward'
            className={pathname !== '/HRspace/workingconditions/typesofreward'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Варианты вознаграждения</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/workingconditions/moneyforrecruiters'
            className={pathname !== '/HRspace/workingconditions/moneyforrecruiters'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Размер вознаграждения</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/workingconditions/candidatefirstworkingday'
            className={pathname !== '/HRspace/workingconditions/candidatefirstworkingday'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Дата вступления в должность</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/workingconditions/interview'
            className={pathname !== '/HRspace/workingconditions/interview'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Формат собеседований</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/workingconditions/firstinterviewdate'
            className={pathname !== '/HRspace/workingconditions/firstinterviewdate'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Старт собеседований</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
        </nav >)
        : undefined}

      {pathname === '/HRspace/recruiterrequirements/recruitersnumber' ||
        pathname === '/HRspace/recruiterrequirements/recruiterstasks' ||
        pathname === '/HRspace/recruiterrequirements/recruiterspeculiarities' ||
        stepIsActive

        ? (<nav className='side-bar__container'>
          <NavLink to='/HRspace/recruiterrequirements/recruitersnumber'
            className={pathname !== '/HRspace/recruiterrequirements/recruitersnumber'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Количество рекрутеров</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/recruiterrequirements/recruiterstasks'
            className={pathname !== '/HRspace/recruiterrequirements/recruiterstasks'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Обязанности рекрутера</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
          <NavLink to='/HRspace/recruiterrequirements/recruiterspeculiarities'
            className={pathname !== '/HRspace/recruiterrequirements/recruiterspeculiarities'
              ? 'side-bar__link link'
              : 'side-bar__link side-bar__link_active link'}>
            <div className='side-bar__link-container'>
              <div className='side-bar__link-title'>Требования к рекрутеру</div>
              <div className='side-bar__link-symbol'>&#5171;</div>
            </div>
          </NavLink>
        </nav >)
        : undefined}
    </>
  )
}

export default SideBarJobDescription