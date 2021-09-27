import React from "react";

const SkillsEditForm = (props) => {
  const {index, skill, onSubmitEdit, handleEditChange, toggleEdit} = props;

    return(
            <form onSubmit={(e)=>{onSubmitEdit(e, index); toggleEdit()}}>
                {console.log('rendering EditForm')
                }
                <label>Skill</label>
                <input 
                type="text"
                value={skill.text}
                onChange={handleEditChange}
                id="editSkillInput"
                />
                <button type="submit">Submit Task</button>
            </form>
    )
}

export default SkillsEditForm;