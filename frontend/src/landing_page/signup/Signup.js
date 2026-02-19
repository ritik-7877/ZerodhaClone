import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Signup = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    // Toggle showAlert state to true when button is clicked
    setShowAlert(true);

    // Optionally, you can reset showAlert after a certain time
    setTimeout(() => {
      setShowAlert(false);
    }, 7000); // Hide alert after 3 seconds (adjust as needed)
  };

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        
          `https://zerodha-backend-rxkl.onrender.com/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess("Signup successful , Now you are part of our community, Hurray !!!!");
        console.log("SUCCESS");
        setTimeout(() => {
          window.location.href = "https://zerodhaclone-dashboard-o5hg.onrender.com";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("An unexpected error occurred.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
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
        <div className="col-4 form_container">
          <h1>Signup now</h1>
          <p className="mb-3 mt-5 text-muted">
            Or track your existing application
          </p>
          <form onSubmit={handleSubmit} >
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={inputValue.email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
               <br />
              <input
                type="text"
                name="username"
                value={inputValue.username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
               <br />
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
            Already have an account?{" "}
            <button
              style={{
                color: "white",
                border: "1px solid black",
                borderRadius: "4px",
                backgroundColor: "green",
                height: "35px",
                width: "70px",
              }}
            >
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "1.2em",
                  color: "white",
                }}
                to={"/login"}
              >
                Login
              </Link>{" "}
            </button>{" "}
            
          </span>
        </form>
          <ToastContainer />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Signup;