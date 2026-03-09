import { useState } from 'react'
import './App.css'
import { PersonalInfo, EducationalExp, WorkExp } from './components/tabSwitch'

function App() {
  const [index, setIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);
  const [value, setValue] = useState({
    firstName: "", 
    lastName: "",
    address: "",
    email: "", 
    phoneNumber: "",
    educations: [
      {
      schoolName: "",
      educationLevel: "",
      dateGraduated: "",
      degree: ""
      }
    ],
    workExperience: [
      {
    companyName: "",
    position: "",
    responsibilities: [],
    startDate: "",
    endDate: ""
      }
    ]
  });
  const tabs = [
  <PersonalInfo key="personalInfo" value={value} setValue={setValue}/>,  
  <WorkExp key="workExp" value={value} setValue={setValue}/>,
  <EducationalExp key="educationalExp" value={value} setValue={setValue}/>,
]

  function handleNextClick() {
    if (index < tabs.length - 1){
      setIndex(index + 1); 
    } else {
      setShowSidebar(false);
    }
  }

  function handlePrevClick() {
    if (index > 0) {
    setIndex(index - 1);
    }
  }

  return (
    <div className='container'>
      {showSidebar && (
      <div className='sideBar'>
      <form onSubmit={(e) => e.preventDefault()}>
      <h1>CV Form</h1>
      {tabs[index]}
      </form>
      {index > 0 && (<button onClick={handlePrevClick}>Prev</button>)}
      <button onClick={handleNextClick}>Next</button>
      </div>
      )}
    <div className='display'>
      {!showSidebar && (
        <button onClick={() => setShowSidebar(true) } className='editBtn'>Edit</button>
      )
      }
      <div className='cv-paper'>
        <div className='cv-header'>
      <h1>{value.firstName} {value.lastName}</h1>
      <p className='cv-contact'>
      {value.address} | {value.phoneNumber} | {value.email}
      </p>
      </div>

      <div className='cv-section'>
        <h2>Work Experience</h2>
        {value.workExperience.map((job, i) => (
          <div key={i} className='cv-entry'>
          <div className='cv-entry-row'>
            <span className='cv-entry-name'>
          {job.companyName}
          </span>
          </div>
          <div className='cv-entry-row'>
            <span className='cv-entry-sub'>
            {job.position}
            </span>
            </div>
            <span className='cv-entry-date'>
            {job.startDate} - {job.endDate}
            </span>
      <ul>
          {job.responsibilities.filter(Boolean).map((line, j) => (
            <li key={j}>{line}</li>
          ))}
      </ul>
      </div>
        ))}
        </div>

      <div className='cv-section'>
        <h2>Education</h2>
        {value.educations.map((edu, i) => (
        <div key={i} className='cv-entry'>
          <div className='cv-entry-row'>
            <span className='cv-entry-name'>
            {edu.schoolName}</span>
            <span className='cv-entry-date'>
              {edu.dateGraduated}
              </span>
              </div>
              <div className='cv-entry-row'>
                <span className='cv-entry-sub'>
                {edu.educationLevel}
                </span>
              </div>
              <p>{edu.degree}</p>
              </div>
        ))}
    </div>
    </div>
    </div>
    </div>
  )
}

export default App
