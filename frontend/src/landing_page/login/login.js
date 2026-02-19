import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from '../AuthContext.js';
import Navbar from "../Navbar";
import Footer from "../Footer";


const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { login } = useAuth(); // Use login function from the context

  const handleClick = () => {
    // Toggle showAlert state to true when button is clicked
    setShowAlert(true);

    // Optionally, you can reset showAlert after a certain time
    setTimeout(() => {
      setShowAlert(false);
    }, 10000); // Hide alert after 100 seconds (adjust as needed)
  };

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Email value:', inputValue.email);
      console.log('Password value:', inputValue.password);
      const { data } = await axios.post(
        `https://zerodha-backend-rxkl.onrender.com/login`,
        { ...inputValue },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess("Login successful , Now you can access kite !!");
        login(); // Set login state to true on successful login
        setTimeout(() => {
          window.location.href = "http://localhost:3000/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(error);
      handleError("An unexpected error occurred.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
  <>   

    <div className="container p-5 mt-2">
      <div
        className="row"
        style={{ alignItems: "center", marginLeft: "100px" }}
      >
        <div className="col-6">
          <img
            src={"media/images/signup.png"}
            alt="signupImage"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h2>Login Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <br/>
              <input
                type="email"
                name="email"
                value={inputValue.email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br/>
              <input
                type="password"
                name="password"
                value={inputValue.password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>


            <div style={{paddingBottom:"40px",paddingTop:"20px"}}>
           
            <button style={{
                color: "white",
                border: "1px solid black",
                fontSize:"1.2em",
                borderRadius: "4px",
                backgroundColor: "blue",
                height: "40px",
                width: "80px",
              }} type="submit" onClick={handleClick}>
              Submit
            </button>
          </div>


            <span>
              Already have an account? <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
 
    </> 
  );
};

export default Login;