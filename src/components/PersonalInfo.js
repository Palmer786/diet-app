import React from "react";

const PersonalInfo = () => {
  return (
    <form className="info">
      <label>
        <h3>Height</h3>
        <input type="text" name="height" />
      </label>
      <label>
        <h3>Weight</h3>
        <input type="text" name="weight" />
      </label>
      <label>
        <h3>Age</h3>
        <input type="number" name="age" />
      </label>
      <label>
        <h3>Gender</h3>
        <input type="radio" name="gender" value="male" />Male
        <input type="radio" name="gender" value="female" />Female
      </label>
    </form>
  );
};

export default PersonalInfo;
