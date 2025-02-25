import React, { useState, useEffect } from "react";
const UserData = () => {
  const [infos, setInfos] = useState(
    JSON.parse(localStorage.getItem("personal-data")) || {}
  );
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [calories, setCalories] = useState("");
  const [gender, setGender] = useState("");
  const updateHeight = e => {
    setHeight(e.target.value);
  };
  const updateWeight = e => {
    setWeight(e.target.value);
  };
  const updateAge = e => {
    setAge(e.target.value);
  };
  const updateCalories = e => {
    setCalories(e.target.value);
  };
  const updateGender = e => {
    setGender(e.target.value);
  };

  const percentage = (num, per) => {
    return (num / 100) * per;
  };
  const sendData = e => {
    if (
      height === "" ||
      weight === "" ||
      age === "" ||
      gender === "" ||
      calories === ""
    ) {
      alert("Pola nie moga byc puste");
      e.preventDefault();
    } else {
      setInfos({
        height,
        weight,
        age,
        gender,
        calories,
        fats: Math.round(percentage(calories, 30) / 9),
        protein: Math.round(percentage(calories, 15) / 4),
        carbohydrates: Math.round(percentage(calories, 55) / 4)
      });
    }
  };
  useEffect(() => {
    localStorage.setItem("personal-data", JSON.stringify(infos));
  }, [infos]);
  return (
    <form className="info" onSubmit={sendData}>
      <label>
        <h3>Height</h3>
        <input
          type="text"
          name="height"
          value={height}
          onChange={updateHeight}
        />
      </label>
      <label>
        <h3>Weight</h3>
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={updateWeight}
        />
      </label>
      <label>
        <h3>Age</h3>
        <input type="text" name="age" value={age} onChange={updateAge} />
      </label>
      <label>
        <h3>Calories</h3>
        <input
          type="text"
          name="calories"
          value={calories}
          onChange={updateCalories}
        />
      </label>
      <label>
        <h3>Gender</h3>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={updateGender}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={updateGender}
        />
        Female
      </label>
      <button>Send</button>
    </form>
  );
};

export default UserData;
