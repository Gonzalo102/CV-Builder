import React, {useState } from "react";
import SkillsEditForm from "./SkillsEditForm";
import editLogo from "../images/edit.svg"
import deleteLogo from "../images/delete.svg"

const OverviewSkills = (props) => {
  const { skill, skills, deleteSkill, handleEditChange, onSubmitEdit } = props;

  const [edit, setEdit] = useState(false)
  const [index, setIndex] = useState(0)

  const toggleEdit = () => {
    setEdit(!edit)
  }

  return (
      
    <>
    <ul className="skills-wrapper-items">
      {skills.map((skill, i) => {
        return (
            <div className="skill-item" key={skill.id}>
                <li >{skill.text}</li>
                  <img className="edit-img-button" onClick={() => {toggleEdit(); setIndex(i);}} src={editLogo} alt="profile"/>
                  <img className="edit-img-button" onClick={() => deleteSkill(skill.id)} src={deleteLogo} alt="profile"/>

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