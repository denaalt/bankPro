import React from 'react'
import "./App.css";
import { useState } from 'react';

const [query , setQuery] = useState();

const backround3 = () => {
  return (
    <div className="backround3">
     <label>Search</label>
     <input type='text' onChange={e => setQuery(e.target.value)}></input>
     
    
    
    
    </div>
  )
}

export default backround3;