import React, { useState } from "react";
import uniqid from "uniqid";

const Introduction = (props) => {
    const [edit, setEdit] = useState(false)
    const [introduction, setIntroduction] = useState({
        name: 'Gonzalo Trucco',
        title: 'Front End Developer',
        profileText: "I am a junior programmer with a Front-end orientation. I have knowledge of React, Javascript, CSS and HTML. I am currently finalizing the Full Stack Javascript curriculum in The Odin Project. I consider myself a self-taught person, with a great predisposition to establish interpersonal relationships and work as a team."
    })

    const toggleEdit = () => {
        setEdit(!edit)
      }

    const handleChange = (e) => {
        const {name, value} = e.target
        setIntroduction((prevState) => (
            {...prevState, [name]: value,
            id: uniqid (),
            }
        ))
    } 

    return(
        <div className="introduction-wrapper">
            <h1 id="title-name"> {introduction.name} </h1>
            <h2 id="title-title"> {introduction.title} </h2>
            <h3 id="personal-profile"> Personal Profile </h3>
            <p id="personal-profile-text"> {introduction.profileText} </p>
        
             <button
                id="edit-intro"
                onClick = {toggleEdit}
            > Edit</button>
        {edit && 
         <form className="intro-form">
            <label htmlFor="name"> Name </label>
            <input
                name="name"
                type="text"
                value={introduction.name}
                onChange={handleChange}
            ></input>
            <label htmlFor="title"> Title </label>
            <input
                name="title"
                type="text"
                value={introduction.title}
                onChange={handleChange}
            ></input>
            <label htmlFor="profileText"> Personal Profile </label>
            <input
                name="profileText"
                type="text"
                value={introduction.profileText}
                onChange={handleChange}
            ></input>
        </form>
        }
         </div>
    )
}

export default Introduction;