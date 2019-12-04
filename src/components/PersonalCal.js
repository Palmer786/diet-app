import React, {useEffect} from 'react';

const PersonalCal = () =>{
    // useEffect(() => {
    //     JSON.parse(localStorage.getItem("personal-data")) || {}
    // },[])
return(
    <div className="info">
        <h1>Calories: 500/2000</h1>
        <h2>Protein: 40/140</h2>
        <h2>Fats: 24/80</h2>
        <h2>Carbohydrates: 50/180</h2>
    </div>
);
}

export default PersonalCal;