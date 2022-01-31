import React from "react";

const SkillsEditForm = (props) => {
  const { index, skill, onSubmitEdit, handleEditChange, toggleEdit } = props;

  return (
    <form
      className="skill-edit-form"
      onSubmit={(e) => {
        onSubmitEdit(e, index);
        toggleEdit();
      }}
    >
      <input
        type="text"
        value={skill.text}
        placeholder="Edit your skill here"
        onChange={handleEditChange}
        id="editSkillInput"
      />
      <div className="edit-button-wrapper">
        <button type="submit">Submit Task</button>
        <button onClick={toggleEdit} type="button">
          Close{" "}
        </button>
      </div>
    </form>
  );
};

export default SkillsEditForm;
