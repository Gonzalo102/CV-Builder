import React from "react";


const OverviewExperience = (props) => {
  const { experience, deleteExperience } = props;

  return (
      
    <>
    {console.log('rendering OverviewExperience')}
    <ul>
      {experience.map((expitem, i) => {
        return (
            <>
            <div className="experience-wrapper" key={expitem.id} >
                <div>
                    <li id="date-from-until"> {expitem.dateFrom} - {expitem.dateUntil}</li>
                    <li id="position"> {expitem.position}</li>
                </div>
                <div className="company-wrapper">
                    <li id="companyName"> {expitem.companyName}</li>
                    <li id="city"> {expitem.city}</li>
                    <li id="mainTasks"> {expitem.mainTasks}</li>
                </div>
                <button className="x-button" onClick={() => deleteExperience(expitem.id)}>x</button>
            </div>
            
            </>
        );
      })}
    </ul>

    </>

  );
};

export default OverviewExperience;