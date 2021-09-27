
import React, { useEffect, useState } from "react";
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
        text: 'Javascript - Intermidiate',
        id: uniqid(),
        },
        {
        text: 'React - Begginer',
        id: uniqid(),
        },
        {
        text: 'CSS - Advance',
        id: uniqid(),
        },
    ])

    const toggleEdit = () => {
        setEdit(!edit)
        console.log('edit in Skills: ', edit)
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
        console.log(id)
        setSkills(() => {
            const newSkills = skills.filter((skill) => skill.id !== id)
            console.log('newskills array: ', newSkills)
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

    useEffect(()=>{
        console.log(skill)
        console.log('skills array:', skills)
    })

    return (
        <div>
            <button
                 onClick = {toggleEdit}
            > Add New Skill</button>
            {edit && 
            <form>
                <label htmlFor="newskill"> New Skill </label>
                <input
                    id="newskill"
                    type="text"
                    value={skill.text}
                    onChange={handleChange}
                ></input>
                <button
                    onClick = {addSkills}
                > Add Skill </button>
            </form>
            }
            <OverviewSkills skill ={skill} skills={skills} deleteSkill={deleteSkill} handleEditChange={handleEditChange} onSubmitEdit={onSubmitEdit}/>
        </div>
    )
}

export default Skills; 
