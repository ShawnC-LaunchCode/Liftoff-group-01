function loginForm() {
    return (
      <div className="loginForm">
        <h1 class="welcomePageHeader">Welcome to Weather2Wear!</h1>
  <h3>Please Log In to Your Account</h3>
  <div>
  <form action="user-homepage.js" method="post">
      <label>Email <input type="email" name="emailAddress"/></label>
      <br/><label>Password <input type="text" name="password" /></label>
      <br/><button id="loginButton" type="submit">Log In</button>
  </form>
  </div>
      </div>
    );
  }
  
  export default loginForm;
   