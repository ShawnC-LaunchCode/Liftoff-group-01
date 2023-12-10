function createAccount() {
    return (
      <div className="createAccount">
        <h1 class="createAccountPageHeader">Welcome to Weather2Wear!</h1>
  <h3>Create a New Account Below</h3>
  <div>
  <form action="App.js" method="post">
     <label>First Name <input type="text" name="firstName"/> </label>
      <label>Last Name <input type="text" name="lastName"/> </label>
      <label>Email <input type="email" name="emailAddress"/></label>
      <label>Your 5-digit Zip Code <input type="number" name="zipCode" /></label>
      <button id="loginButton" type="submit">Log In</button>
  </form>
  </div>
      </div>
    );
  }
  
  export default createAccount;