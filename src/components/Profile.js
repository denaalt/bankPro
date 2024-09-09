import React from "react";
import "../assets/css/data/App.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../api/auth";

const Profile = () => {
    const [name , setName] = useState("")
    const [balance,setBalance] = useState("")
    const [isDataChanged,setIsDataChanged] = useState(false);
    const handleNameChange = (e) => {
       setName (e.target.value);
       setIsDataChanged(true)
    }
    const { data: profile } = useQuery({
        queryKey: ["profile"],
        queryFn: getAll,
      });
    
    const handleBalanceChange = (e) =>{
      setBalance (e.target.value)
      setIsDataChanged(true)
    }
    const handleSave = () =>{
      alert (`Saved! Name: ${name} , Balance: ${balance}`)
      setIsDataChanged(false)
    }
  return (
   
      <div className="Profile">
        <div className="profile-container">
        <label>
        Name:{profile?.username}
         {/* <input 
         type="text"
         value={name}
         onChange={handleNameChange}
         /> */}
        </label>
         Balance: {profile?.balance}
         {/* <input
         type="number"
         value={balance}
         onChange = {handleBalanceChange}
         /> */}
         
         <button
         onClick={handleSave}
         disabled={!isDataChanged}
         
         >Save</button>
         </div>
         
      </div>
        
    
  );
};

export default Profile;
