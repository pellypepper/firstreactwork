
import { NavLink } from "react-router-dom";

function Register(){
    return(
        <div className="register-container container">
            <form className="form-container">
                <h1> Become a Member, Join Today <p>If you already have an account. <span> <NavLink to="/login"  className="nav-item">Click here</NavLink></span></p></h1>
               <div  className="form-box">
                  <div>
                  <label>First Name</label>
                <input type="text"></input>
                <label>Last Name</label>
                <input type="text"></input>
                  </div>
               </div>
               <div className="form-middle">
               <div  className="form-box form-box-1">
               <label>Email</label>
                <input type="email"></input>
               
               </div>
               <div className="form-box form-box-1">
               <label> Address</label>
                <input type="text" placeholder="Enter your full address"></input>
               </div>
               </div>
               <div  className="form-box">
               <div>
               <label>Phone Number</label>
                <input type="number"></input>
                <label> Date Of Birth</label>
                <input type="date"></input>
               </div>
               </div>
               <div  className="form-box">
              
                <div>
                <label>Password</label>
                <input type="password" placeholder="must not be more than 8-digit"></input>
                <label> Confirm Password</label>
                <input type="password"></input>
                </div>
               </div>
               <div className="state-box">
                <p></p>
               </div>
               <button className="btn">Create Account</button>
               <button className="btn1">Cancel</button>
            </form>
        </div>
    )}

    export default Register