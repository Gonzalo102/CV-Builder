
import React, { useState } from "react";
import uniqid from "uniqid";
import OverviewSkills from "./OverviewSkills";

const Skills = ()=>{

    const [edit, setEdit] = useState(false)
    const [skill, setSkill] = useState({
        text: '',
        id: uniqid(),
    }
    )

    const [skills, setSkills] = useState([{
        text: 'Javascript - Intermediate',
        id: uniqid(),
        },
        {
        text: 'React - Begginer',
        id: uniqid(),
        },
        {
        text: 'CSS - Advanced',
        id: uniqid(),
        },
    ])

    const toggleEdit = () => {
        setEdit(!edit)
      }

    const handleChange = (e) => {
        setSkill({
            text: e.target.value,
            id: uniqid(),
        }, )
    }

    const addSkills = (e)=> {
        e.preventDefault();
        setSkills(skills => [...skills, skill])
        setSkill({
            text: '',
            id: uniqid(),
        })
        toggleEdit();
    }
    
    const deleteSkill = (id) => {
        setSkills(() => {
            const newSkills = skills.filter((skill) => skill.id !== id)
            setSkills(newSkills)
        })
    }

    const onSubmitEdit = (e, index) => {
        e.preventDefault();
        let newSkills = [...skills];
        newSkills[index].text = e.target.querySelector('#editSkillInput').value;
        setSkills(newSkills);
        setSkill({
            text: '',
            id: uniqid(),
        })
    }

    const handleEditChange = (e) => {
        setSkill({
          skill:{
            text: e.target.value
          }
        })
    }

    return (
        <div className="skills-wrapper">
            <h1 className="aside-title">Skills</h1>
            <button
                id="add-new-skill-button"
                 onClick = {toggleEdit}
            > Add Skill</button>
            {edit && 
            <form className="new-skill-form">
                <input
                    id="newskill"
                    type="text"
                    placeholder="New Skill"
                    value={skill.text}
                    onChange={handleChange}
                ></input>
                <div className="buttons-skill-form">
                    <button
                        onClick = {addSkills}
                    > Add Skill </button>
                    <button
                        onClick = {toggleEdit}
                    > Close </button>
                </div>
            </form>
            }
            <OverviewSkills skill ={skill} skills={skills} deleteSkill={deleteSkill} handleEditChange={handleEditChange} onSubmitEdit={onSubmitEdit}/>
        </div>
    )
}

export default Skills; 
