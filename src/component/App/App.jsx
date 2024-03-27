import './App.css'
import { Routes, Route } from 'react-router-dom'
import StepHome from '../StepHome/StepHome.jsx'
import StepWarning from '../StepWarning/StepWarning.jsx'
import StepSphere from '../StepSphere/StepSphere.jsx'
import StepCity from '../StepCity/StepCity.jsx'
import StepOfficeRemote from '../StepOfficeRemote/StepOfficeRemote.jsx'
import StepSalary from '../StepSalary/StepSalary.jsx'
import StepWorkingHours from '../StepWorkingHours/StepWorkingHours.jsx'
import StepEmploymentType from '../StepEmploymentType/StepEmploymentType.jsx'
import StepBusinessTrips from '../StepBusinessTrips/StepBusinessTrips.jsx'
import StepSubordinatesNumber from '../StepSubordinatesNumber/StepSubordinatesNumber.jsx'
import StepJobPeculiarities from '../StepJobPeculiarities/StepJobPeculiarities.jsx'
import StepYearsOfExperience from '../StepYearsOfExperience/StepYearsOfExperience.jsx'
import StepSkills from '../StepSkills/StepSkills.jsx'
import StepEducation from '../StepEducation/StepEducation.jsx'
import StepPortfolio from '../StepPortfolio/StepPortfolio.jsx'
import StepNumberOfVacancies from '../StepNumberOfVacancies/StepNumberOfVacancies.jsx'
import StepTypesOfReward from '../StepTypesOfReward/StepTypesOfReward.jsx'
import StepMoneyForRecruiters from '../StepMoneyForRecruiters/StepMoneyForRecruiters.jsx'
import StepCandidateFirstWorkingDay from '../StepCandidateFirstWorkingDay/StepCandidateFirstWorkingDay.jsx'
import StepInterview from '../StepInterview/StepInterview.jsx'
import StepFirstInterviewDate from '../StepFirstInterviewDate/StepFirstInterviewDate.jsx'
import StepRecruitersNumber from '../StepRecruitersNumber/StepRecruitersNumber.jsx'
import StepRecruitersTasks from '../StepRecruitersTasks/StepRecruitersTasks.jsx'
import StepRecruitersPeculiarities from '../StepRecruitersPeculiarities/StepRecruitersPeculiarities.jsx'
import StepCheckBeforePayment from '../StepCheckBeforePayment/StepCheckBeforePayment.jsx'
import StepFormSubmit from '../StepFormSubmit/StepFormSubmit.jsx'
import PageNotFound from '../PageNotFound/PageNotFound.jsx'


function App() {


  return (
    <>
<main>
        <Routes>
          <Route path='/HRspace' element={<StepHome />} />

          <Route path='/HRspace/jobdescription/warning' element={<StepWarning />} />
          <Route path='/HRspace/jobdescription/sphere' element={<StepSphere />} />
          <Route path='/HRspace/jobdescription/city' element={<StepCity />} />
          <Route path='/HRspace/jobdescription/officeremote' element={<StepOfficeRemote />} />
          <Route path='/HRspace/jobdescription/salary' element={<StepSalary />} />
          <Route path='/HRspace/jobdescription/workinghours' element={<StepWorkingHours />} />
          <Route path='/HRspace/jobdescription/employmenttype' element={<StepEmploymentType />} />
          <Route path='/HRspace/jobdescription/businesstrips' element={<StepBusinessTrips />} />
          <Route path='/HRspace/jobdescription/subordinatesnumber' element={<StepSubordinatesNumber />} />
          <Route path='/HRspace/jobdescription/jobpeculiarities' element={<StepJobPeculiarities />} />

          <Route path='/HRspace/candidaterequirements/yearsofexperience' element={<StepYearsOfExperience />} />
          <Route path='/HRspace/candidaterequirements/skills' element={<StepSkills />} />
          <Route path='/HRspace/candidaterequirements/education' element={<StepEducation />} />
          <Route path='/HRspace/candidaterequirements/portfolio' element={<StepPortfolio />} />

          <Route path='/HRspace/workingconditions/numberofvacancies' element={<StepNumberOfVacancies />} />
          <Route path='/HRspace/workingconditions/typesofreward' element={<StepTypesOfReward />} />
          <Route path='/HRspace/workingconditions/moneyforrecruiters' element={<StepMoneyForRecruiters />} />
          <Route path='/HRspace/workingconditions/candidatefirstworkingday' element={<StepCandidateFirstWorkingDay />} />
          <Route path='/HRspace/workingconditions/interview' element={<StepInterview />} />
          <Route path='/HRspace/workingconditions/firstinterviewdate' element={<StepFirstInterviewDate />} />

          <Route path='/HRspace/recruiterrequirements/recruitersnumber' element={<StepRecruitersNumber />} />
          <Route path='/HRspace/recruiterrequirements/recruiterstasks' element={<StepRecruitersTasks />} />
          <Route path='/HRspace/recruiterrequirements/recruiterspeculiarities' element={<StepRecruitersPeculiarities />} />

          <Route path='/HRspace/formpayment' element={<StepCheckBeforePayment />} />
          <Route path='/HRspace/formsubmit' element={<StepFormSubmit />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </main>
    </>
  )
}

export default App
