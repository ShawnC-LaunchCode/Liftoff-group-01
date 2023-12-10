
import './App.css';
import './user-homepage.js'
import Header from './Components/Header.js';


function App() {
  return (
    <div className="App">
      <Header/>
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

export default App;
 