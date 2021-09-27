
/* import React, { useReducer } from "react";
import uniqid from "uniqid";

const initialState = {
    skill: {
        text: '',
        id: uniqid(),
        editButtonId: uniqid(),
    },
    skills: [],
    edit: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'addNewSkill':
            return {
                ...state, skills: state.skills.concat(state.skill),
                skill: {
                    text: '',
                    id: uniqid(),
                    editButtonId: uniqid()
                }
            }
        
        default:
            break;
    }
}

const Skills3 = () => {

    const [skill, dispatch] = useReducer(reducer, initialState)

    const HandleChange = (e) =>{
        
    }


    return (
        <div>
            <form>
                <label htmlFor="newskill"> New Skill </label>
                <input
                    id="newskill"
                    type="text"
                    value={skill.text}
                    onChange={handleChange}
                ></input>
                <button
                    onClick = {()=>dispatch({type: 'addNewSkill'})}
                > Add Skill </button>
            </form>
        </div>
    )
}

export default Skills3; */