import React from "react";

function CreateAccount() {
   
    return (
      <div className="CreateAccount">
        <h1 class="CreateAccountPageHeader">Welcome to Weather2Wear!</h1>
  <h3>Create a New Account Below</h3>
  <div>
  <form action="./App.js" method="post">
     <label>First Name <input type="text" name="firstName"/> </label>
      <label>Last Name <input type="text" name="lastName"/> </label>
      <label>Email <input type="email" name="emailAddress"/></label>
      <label>Verify Password <input type="email" name="verifyEmailAddress"/></label>
      <input type="submit" formAction="./App.js" value="createAccount"/>
  </form>
  </div>
      </div>
    );
  }
  
  export default CreateAccount;