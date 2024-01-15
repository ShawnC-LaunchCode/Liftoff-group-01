import React from "react";
import useState from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
    const[firstName,setFirstName]=useState("");
    const[lastName, setLastName]= useState("");
  
    const[email, setEmail]=useState(false);
    const navigate=useNavigate();
    const [password, setPassword] = useState([]);
    


    const handlesubmit=(e)=>{
      e.preventDefault();
      const data={name,email,password};
      

      fetch("http://localhost:8080/register",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{
        //alert('Saved successfully.')
        Swal.fire({icon: "success",
        title:"Registration Successful!"});
        navigate('/Login');
      }).catch((err)=>{
        console.log(err.message)
      })
    //   const newUser = {
    //     name: data.name,
    //     email: data.email,
    //     password: data.password
    //   }
    //   const newContacts = [...records, newContact];
    //   setRecords(newContacts);

    // }




   
    return (
      <div className="CreateAccount">
        <h1 class="CreateAccountPageHeader">Welcome to Weather2Wear!</h1>
  <h3>Create a New Account Below</h3>
  <div>
  <form onSubmit={handlesubmit}>
     <label>First Name <input type="text" value={firstName} /> </label>
      <label>Last Name <input type="text" value={lastName}/> </label>
      <label>Email <input type="email" value={email}/></label>
      <label>Password<input type="text" value={password}/></label>
      <br />
      <button type="submit">Register</button>
  </form>
  </div>
      </div>
    );
  }
}
  export default Register;