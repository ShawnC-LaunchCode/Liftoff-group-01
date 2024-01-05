import React from 'react';

function SetEverydayDresscode() {
    return (
      <div className="setEverydayDresscode">

  

  <h2>How Would You Describe Your Everyday Wardrobe?</h2>
  <form>
   <label>Casual <input type="radio" name="everydayDresscode" value="Casual"/></label> 
    <label>Business Casual <input type="radio" name="everydayDresscode" value="Buisness Casual"/> </label>
    <label> Semi-Formal <input type="radio" name="everydayDresscode" value="Semi-Formal"/></label>
    <label>Formal <input type="radio" name="everydayDresscode" value="Formal"/> </label>
  </form>


      </div>
    );
  }
  
  export default SetEverydayDresscode;