import React from 'react';

export default function SetStyle() {
    return (
      <div >

  <h3>Update Your Style Preferences Below</h3>
  <div>
  <form action="/Settings.js" method="post">
    <label>Female <input type="checkbox" name="stylePrefFemale"/> </label>
    <label>Male <input type="checkbox" name="stylePrefMale"/> </label>
     <label>Female and Male<input type="checkbox" name="stylePrefFemaleAndMale"/> </label>
    <label>Neither Female nor Male <input type="checkbox" name="stylePrefNone"/> </label>
  </form>
  </div>
      </div>
    );
  }
  
