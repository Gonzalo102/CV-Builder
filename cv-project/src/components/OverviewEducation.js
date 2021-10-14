import React from "react";


const OverviewEducation = (props) => {
    const { education, deleteEducation } = props;

    return (
        
      <>
      <ul>
        {education.map((editem, i) => {
          return (
              <>
              <div className="experience-wrapper" key={editem.id} >
                  <div>
                      <li id="date-from-until"> {editem.dateFrom} - {editem.dateUntil}</li>
                      <li id="position"> {editem.career}</li>
                  </div>
                  <div className="company-wrapper">
                      <li id="companyName"> {editem.school}</li>
                      <li id="city"> {editem.city}</li>
                      <li id="mainTasks"> Average Calification: {editem.calificationAvg}</li>
                  </div>
                  <button className="x-button" onClick={() => deleteEducation(editem.id)}>x</button>
              </div>
              
              </>
          );
        })}
      </ul>
  
      </>

  );
};

export default OverviewEducation;