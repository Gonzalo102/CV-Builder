
import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import OverviewExperience from "./OverviewExperience";

const Experience = () => {
    
    const [experience, setExperience] = useState([{
        position: 'Analyst',
        companyName: 'Banco Nacion',
        mainTasks: 'Tareas de mantenimiento de oficina',
        dateFrom: '2015',
        dateUntil: 'Present',
        id: uniqid (),
        },
    ])
    const [newExperience, setNewExperience] = useState({
        position: '',
        companyName: '',
        mainTasks: '',
        dateFrom: '',
        dateUntil: '',
        id: uniqid (),
    })
    const [edit, setEdit] = useState(false)
    
    const toggleEdit = () => {
        setEdit(!edit)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setNewExperience((prevState) => (
            {...prevState, [name]: value,
            id: uniqid (),
            }
        ))
    } 
    
    const handleAddExperience = ()=> {
        setExperience(experience => [...experience, newExperience])
    }

    const deleteExperience = (id) => {
        console.log(id)
        setExperience(() => {
            const newExperience = experience.filter((expitem) => expitem.id !== id)
            console.log('newskills array: ', newExperience)
            setExperience(newExperience)
        })
    }

    useEffect(()=>{
        console.log(experience)
        const i = experience.length
        console.log('experience lengt: ' , i)
    })

    return (
      <div id="experience">
        <h1>Experience</h1>
        <button
                type="button"
                onClick={()=>{toggleEdit();}}
            > Add New Experience
        </button>

        {edit && 
        <form>
            <label  htmlFor="position">Position Name</label>
            <input
                id="position"
                name="position"
                type="text"
                defaultValue=''
                onChange={handleChange }
                
            />
            <label  htmlFor="companyName">Company Name</label>
            <input
                id="companyName"
                name="companyName"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="mainTasks">Main Tasks</label>
            <input
                id="mainTasks"
                name="mainTasks"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="dateFrom">Date From</label>
            <input
                id="dateFrom"
                name="dateFrom"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="dateUntil">Date Until</label>
            <input
                id="dateUntil"
                name="dateUntil"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <button
                onClick = {()=> {handleAddExperience(); toggleEdit();}}
                type="button"
            > Add Experience
            </button>
            <button
                type="button"
                onClick={toggleEdit}
            > Close
            </button>
        </form>
        }
        <OverviewExperience experience={experience} deleteExperience={deleteExperience}/>
      </div>
    );
  };
  
  export default Experience;