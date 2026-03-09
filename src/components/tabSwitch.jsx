
export function PersonalInfo({value, setValue}) {

  function handleChange(e) {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }
    return (
    <section>
      <h2>Personal Information</h2>
      <p>
      <label>First Name:</label>
      <input
      name="firstName"
      type="text"
      value={value.firstName}
      onChange = {handleChange}
      />
      </p>
      <p>
      <label>Last Name:</label>
      <input
      name="lastName"
      type="text"
      value={value.lastName}
      onChange = {handleChange}
      />
      </p>
      <p>
        <label>Adress:</label>
        <input 
        name="address"
        type="text"
        value={value.address}
        onChange = {handleChange} 
        />
      </p>
      <p>
      <label>Phone Number:</label>
      <input
      name="phoneNumber"
      type="tel"
      value={value.phoneNumber}
      onChange={handleChange}
      />
      </p>
      <p>
      <label>Email:</label>
      <input
      name="email"
      type="email"
      value={value.email}
      onChange={handleChange}
      />
      </p>
    </section>
    )
}

export function EducationalExp({value, setValue}) {

  function handleEduChange(eduIndex, field, newValue) {
    const updated = [...value.educations];
    updated[eduIndex] = { ...updated[eduIndex],
      [field]: newValue
    };
    setValue({ ...value, educations: updated});
  }

  function addEducation() {
    setValue({
      ...value,
      educations: [...value.educations, {
        schoolName: '', educationLevel: '',
        dateGraduated:'', degree: ''
      }]
    });
  }

    return (
    <section>
      <h2>Educational Experience</h2>
      {value.educations.map((edu, eduIndex) => (
        <div key={eduIndex} className="work-entry-block">
          <label>School Name:</label>
          <input
          name="schoolName"
          type="text"
          value={edu.schoolName}
          onChange={(e) => handleEduChange(eduIndex, 'schoolName', e.target.value)}
      />
      <label>Education Level:</label>
      <select name="educationLevel" value={edu.educationLevel} onChange={(e) => 
        handleEduChange(eduIndex, 'educationLevel', e.target.value)}>
        <option value="Elementary">Elementary</option>
        <option value="High School">High School</option>
        <option value="Senior High School">Senior High School</option>
        <option value="College">College</option>
      </select>
      <label>Bachelor's Degree:</label>
      <input 
      name="degree"
      type="text"
      value={edu.degree}
      onChange={(e) => handleEduChange(eduIndex, 'degree', e.target.value)}
      />
      <label>Year</label>
      <input
      name='dateGraduated' 
      type="month"
      value={edu.dateGraduated}
      onChange={(e) => handleEduChange(eduIndex, 'dateGraduated', e.target.value)}
      />
        </div>
      ))}
      <button className="add-btn" onClick={addEducation}>Add Education</button>
    </section>
    )
}

export function WorkExp({value, setValue}) {
  
  function handleResponsibility(jobIndex, respIndex, newValue) {
    const updated = [...value.workExperience];
    const updatedResp = [...updated[jobIndex].responsibilities];
    updatedResp[respIndex] = newValue;
    updated[jobIndex] = {...updated[jobIndex], responsibilities: updatedResp};
    setValue({ ...value, workExperience: updated});
  }

  function addResponsibility(jobIndex) {
    const updated = [...value.workExperience];
    updated[jobIndex] = {...updated[jobIndex], responsibilities:
      [...updated[jobIndex].responsibilities, '']
    };
    setValue({...value, workExperience: updated});
  }


  function handleJobChange(jobIndex, field, newValue) {
    const updated = [...value.workExperience];
    updated[jobIndex] = { ...updated[jobIndex],
      [field]: newValue
    };
    setValue({ ...value, workExperience: updated});
  }

  function addWorkExperience() {
    setValue({
      ...value,
      workExperience: [
        ...value.workExperience, {
          companyName: '',
          position: '',
          responsibilities: [],
          startDate: '',
          endDate: '',
        }
      ]
    })
  }

    return (
    <section>
      <h2>Work Experience</h2>
      {value.workExperience.map((job, jobIndex) => (
        <div key={jobIndex} className="work-entry-block">
        <label>Company Name:</label>
      <input 
      type="text"
      name="companyName"
      value={job.companyName}
      onChange={(e) => handleJobChange(jobIndex, 'companyName', e.target.value)}
      />
      <label>Company Position:</label>
      <input 
      type="text" 
      name="position"
      value={job.position}
      onChange={(e) => handleJobChange(jobIndex, 'position', e.target.value)}
      />
      <label>Responsibilities:</label>
      {job.responsibilities.map((item, respIndex) => (
        <div key={respIndex} className="responsibility-row">
          <textarea 
          name="responsibilities"
          value={item}
          onChange={(e) => handleResponsibility(jobIndex, respIndex, e.target.value)}
          />
        </div>
      ))}
    <button onClick={() => addResponsibility(jobIndex)} className="add-btn">Add more</button>
    <label>Starting date of work:</label>
    <input
    name='startDate' 
    type="month"
    value={job.startDate}
    onChange={(e) => handleJobChange(jobIndex, 'startDate', e.target.value)}
    />
    <label>End date of work:</label>
    <input
    name='endDate'
    type='month'
    value={job.endDate}
    onChange={(e) => handleJobChange(jobIndex, 'endDate', e.target.value)}
    />
        </div>
      ))}
      <button className="add-btn" onClick={addWorkExperience}> Add Work Experience</button>
    </section>
    )
}