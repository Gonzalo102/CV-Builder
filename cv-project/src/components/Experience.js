
import React, { useState } from "react";
import uniqid from "uniqid";
import OverviewExperience from "./OverviewExperience";

const Experience = () => {
    
    const [experience, setExperience] = useState([{
        position: 'Senior Developer',
        city: 'San Diego, USA',
        companyName: 'Google',
        mainTasks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateFrom: 'NOV 2015',
        dateUntil: 'DEC 2020',
        id: uniqid (),
        },
        {
        position: 'Junior Developer',
        city: 'Los Angeles, USA',
        companyName: 'Facebook',
        mainTasks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dateFrom: 'JUL 2010',
        dateUntil: 'SEP 2014',
        id: uniqid (),
        }
    ])
    const [newExperience, setNewExperience] = useState({
        position: '',
        city: '',
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
        setExperience(() => {
            const newExperience = experience.filter((expitem) => expitem.id !== id)
            setExperience(newExperience)
        })
    }

    return (
      <div id="experience">
        <h1 className="main-title" >Experience</h1>
        <button
                id="add-new-exp-button"
                type="button"
                onClick={()=>{toggleEdit();}}
            > Add New Experience
        </button>

        {edit && 
        <form className="edit-form add-experience">
            <label  htmlFor="position">Position Name</label>
            <input
                name="position"
                placeholder="Position"
                type="text"
                defaultValue=''
                onChange={handleChange }
            />
            <label  htmlFor="city">City Name</label>
            <input
                
                name="city"
                placeholder="City Name"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="companyName">Company Name</label>
            <input
                
                name="companyName"
                placeholder="Company Name"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="mainTasks">Main Tasks</label>
            <input
                
                name="mainTasks"
                placeholder="Main Tasks"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="dateFrom">Date From</label>
            <input
                id="dateFrom"
                name="dateFrom"
                placeholder="Month Year"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="dateUntil">Date Until</label>
            <input
                id="dateUntil"
                name="dateUntil"
                type="text"
                placeholder="Month Year"
                defaultValue=''
                onChange={handleChange}
            />
            <div className="buttons">
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
            </div>
        </form>
        }
        <OverviewExperience experience={experience} deleteExperience={deleteExperience}/>
      </div>
    );
  };
  
  export default Experience;