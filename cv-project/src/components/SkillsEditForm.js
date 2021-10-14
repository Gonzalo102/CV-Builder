import React from "react";

const SkillsEditForm = (props) => {
  const {index, skill, onSubmitEdit, handleEditChange, toggleEdit} = props;

    return(
            <div className="skill-edit-form">
              <form  onSubmit={(e)=>{onSubmitEdit(e, index); toggleEdit()}}>
                  <input 
                  type="text"
                  value={skill.text}
                  placeholder= "Edit your skill here"
                  onChange={handleEditChange}
                  id="editSkillInput"
                  />
                  <button type="submit">Submit Task</button>
              </form>
              <button onClick={toggleEdit} type="button">Close </button>
            </div>
    )
}

export default SkillsEditForm;