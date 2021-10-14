import React, { useState } from "react";
import uniqid from "uniqid";
import OverviewEducation from "./OverviewEducation";

const Education = () => {
    
    const [education, setEducation] = useState([{
        career: 'Web Design',
        city: 'San Francisco, USA',
        school: 'University of Buenos Aires',
        calificationAvg: '9.5',
        dateFrom: 'NOV 2015',
        dateUntil: 'DEC 2020',
        id: uniqid (),
        },
    ])
    const [newEducation, setNewEducation] = useState({
        career: '',
        city: '',
        school: '',
        calificationAvg: '',
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
        setNewEducation((prevState) => (
            {...prevState, [name]: value,
            id: uniqid (),
            }
        ))
    } 
    
    const handleAddEducation = ()=> {
        setEducation(education => [...education, newEducation])
    }

    const deleteEducation = (id) => {
        setEducation(() => {
            const newEducation = education.filter((editem) => editem.id !== id)
            setEducation(newEducation)
        })
    }


    return (
      <div id="education">
        <h1 className="main-title" >Education</h1>
        <button
                id="add-new-edu-button"
                type="button"
                onClick={()=>{toggleEdit();}}
            > Add New Education
        </button>

        {edit && 
        <form className="edit-form add-education">
            <label  htmlFor="career">Career Name</label>
            <input
                name="career"
                placeholder="Career"
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
            <label  htmlFor="school">School Name</label>
            <input
                name="school"
                placeholder="School Name"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="calificationAvg">Average Calification</label>
            <input
                
                name="calificationAvg"
                placeholder="Average Calification"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="dateFrom">Date From</label>
            <input
                name="dateFrom"
                placeholder="Month Year"
                type="text"
                defaultValue=''
                onChange={handleChange}
            />
            <label  htmlFor="dateUntil">Date Until</label>
            <input
                name="dateUntil"
                type="text"
                placeholder="Month Year"
                defaultValue=''
                onChange={handleChange}
            />
            <div className="buttons">
                <button
                    onClick = {()=> {handleAddEducation(); toggleEdit();}}
                    type="button"
                > Add Education
                </button>
                <button
                    type="button"
                    onClick={toggleEdit}
                > Close
                </button>
            </div>
        </form>
        }
        <OverviewEducation education={education} deleteEducation={deleteEducation}/>
      </div>
    );
  };
  
  export default Education;