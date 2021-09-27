import React, {useState } from "react";
import SkillsEditForm from "./SkillsEditForm";

const OverviewSkills = (props) => {
  const { skill, skills, deleteSkill, handleEditChange, onSubmitEdit } = props;

  const [edit, setEdit] = useState(false)
  const [index, setIndex] = useState(0)

  const toggleEdit = () => {
    setEdit(!edit)
  }

  return (
      
    <>
    {console.log('rendering OverviewSkills')}
    <ul>
      {skills.map((skill, i) => {
        return (
            <div key={skill.id}>
                <li >{skill.text}</li>
                <button onClick={() => deleteSkill(skill.id)}>Delete Skill</button>
                <button onClick={() => {toggleEdit(); setIndex(i);}}>Edit Task</button> 
            </div>
        );
      })}
    </ul>
    {edit && 
    <SkillsEditForm index={index} edit={edit} skill={skill} deleteSkill={deleteSkill} handleEditChange={handleEditChange} onSubmitEdit={onSubmitEdit} toggleEdit={toggleEdit}/>
    }
    </>

  );
};

export default OverviewSkills;