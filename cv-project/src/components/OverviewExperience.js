import React from "react";


const OverviewExperience = (props) => {
  const { experience, deleteExperience } = props;

  return (
      
    <>
    {console.log('rendering OverviewExperience')}
    <ul>
      {experience.map((expitem, i) => {
        return (
            <div key={expitem.id} > Experience Number {i+1}
                <li> {expitem.position}</li>
                <li> {expitem.companyName}</li>
                <li> {expitem.mainTasks}</li>
                <li> {expitem.dateFrom}</li>
                <li> {expitem.dateUntil}</li>
                <button onClick={() => deleteExperience(expitem.id)}>Delete Experience</button>
            </div>
        );
      })}
    </ul>

    </>

  );
};

export default OverviewExperience;