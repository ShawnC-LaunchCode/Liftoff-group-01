function setStyle() {
    return (
      <div className="App">
        <h1 class="welcomePageHeader">Welcome to Weather2Wear!</h1>
  <h3>Please Log In to Your Account</h3>
  <div>
  <form action="user-homepage.js" method="post">
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
  
  export default setStyle;