import './ProgressBar.css'
import '../Link/Link.css'
import { useLocation, NavLink } from 'react-router-dom'
import { useState } from 'react'

function ProgressBar() {

  let { pathname } = useLocation();

  //пока что костыль, когда сделаем логику, будем брать из useFrom
  const [stepIsActive, setStepIsActive] = useState(false);

  return (
    <div className='progress-bar__container'>
      <h2 className='progress-bar__title'>{pathname === '/HRspace/formsubmit' || pathname === '/HRspace/formpayment' ? 'Конец заявки' : 'Создание заявки'}</h2>

      <nav className='progress-bar__menu'>
        <ul className='progress-bar__links'>
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

            pathname === '/HRspace/candidaterequirements/yearsofexperience' ||
            pathname === '/HRspace/candidaterequirements/skills' ||
            pathname === '/HRspace/candidaterequirements/education' ||
            pathname === '/HRspace/candidaterequirements/portfolio' ||

            pathname === '/HRspace/workingconditions/numberofvacancies' ||
            pathname === '/HRspace/workingconditions/typesofreward' ||
            pathname === '/HRspace/workingconditions/moneyforrecruiters' ||
            pathname === '/HRspace/workingconditions/candidatefirstworkingday' ||
            pathname === '/HRspace/workingconditions/interview' ||
            pathname === '/HRspace/workingconditions/firstinterviewdate' ||

            pathname === '/HRspace/recruiterrequirements/recruitersnumber' ||
            pathname === '/HRspace/recruiterrequirements/recruiterstasks' ||
            pathname === '/HRspace/recruiterrequirements/recruiterspeculiarities' ||
            pathname === '/HRspace/formpayment' ||
            pathname === '/HRspace/formsubmit' ||
            stepIsActive

            ? < li className='progress-bar__link progress-bar__link_active link'>
              <NavLink to='/HRspace/jobdescription/sphere' className='progress-bar__step'>
                <span className='progress-bar__line progress-bar__line_active'></span>
                Опишите вакансию</NavLink>
            </li>

            : < li className='progress-bar__link'>
              <div className='progress-bar__step'>
                <span className='progress-bar__line'></span>
              </div>
              Опишите вакансию
            </li>}

          {pathname === '/HRspace/candidaterequirements/yearsofexperience' ||
            pathname === '/HRspace/candidaterequirements/skills' ||
            pathname === '/HRspace/candidaterequirements/education' ||
            pathname === '/HRspace/candidaterequirements/portfolio' ||

            pathname === '/HRspace/workingconditions/numberofvacancies' ||
            pathname === '/HRspace/workingconditions/typesofreward' ||
            pathname === '/HRspace/workingconditions/moneyforrecruiters' ||
            pathname === '/HRspace/workingconditions/candidatefirstworkingday' ||
            pathname === '/HRspace/workingconditions/interview' ||
            pathname === '/HRspace/workingconditions/firstinterviewdate' ||

            pathname === '/HRspace/recruiterrequirements/recruitersnumber' ||
            pathname === '/HRspace/recruiterrequirements/recruiterstasks' ||
            pathname === '/HRspace/recruiterrequirements/recruiterspeculiarities' ||
            pathname === '/HRspace/formpayment' ||
            pathname === '/HRspace/formsubmit' ||
            stepIsActive

            ? < li className='progress-bar__link progress-bar__link_active link'>
              <NavLink to='/HRspace/candidaterequirements/yearsofexperience' className='progress-bar__step'>
                <span className='progress-bar__line progress-bar__line_active'></span>
                Требования к кандидату</NavLink>
            </li>

            : < li className='progress-bar__link'>
              <div className='progress-bar__step'>
                <span className='progress-bar__line'></span>
              </div>
              Требования к кандидату
            </li>}

          {pathname === '/HRspace/workingconditions/numberofvacancies' ||
            pathname === '/HRspace/workingconditions/typesofreward' ||
            pathname === '/HRspace/workingconditions/moneyforrecruiters' ||
            pathname === '/HRspace/workingconditions/candidatefirstworkingday' ||
            pathname === '/HRspace/workingconditions/interview' ||
            pathname === '/HRspace/workingconditions/firstinterviewdate' ||

            pathname === '/HRspace/recruiterrequirements/recruitersnumber' ||
            pathname === '/HRspace/recruiterrequirements/recruiterstasks' ||
            pathname === '/HRspace/recruiterrequirements/recruiterspeculiarities' ||
            pathname === '/HRspace/formpayment' ||
            pathname === '/HRspace/formsubmit' ||
            stepIsActive

            ? < li className='progress-bar__link progress-bar__link_active link'>
              <NavLink to='/HRspace/workingconditions/numberofvacancies' className='progress-bar__step'>
                <span className='progress-bar__line progress-bar__line_active'></span>
                Условия работы</NavLink>
            </li>

            : < li className='progress-bar__link'>
              <div className='progress-bar__step'>
                <span className='progress-bar__line'></span>
              </div>
              Условия работы
            </li>}


          {pathname === '/HRspace/recruiterrequirements/recruitersnumber' ||
            pathname === '/HRspace/recruiterrequirements/recruiterstasks' ||
            pathname === '/HRspace/recruiterrequirements/recruiterspeculiarities' ||
            pathname === '/HRspace/formpayment' ||
            pathname === '/HRspace/formsubmit' ||
            stepIsActive

            ? < li className='progress-bar__link progress-bar__link_active link'>
              <NavLink to='/HRspace/recruiterrequirements/recruitersnumber' className='progress-bar__step'>
                <span className='progress-bar__line progress-bar__line_active'></span>
                Требования к рекрутеру</NavLink>
            </li>

            : < li className='progress-bar__link'>
              <div className='progress-bar__step'>
                <span className='progress-bar__line'></span>
              </div>
              Требования к рекрутеру
            </li>}
        </ul>
      </nav>
    </div >
  )
}

export default ProgressBar;
