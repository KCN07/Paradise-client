import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff871d",
      }}
    >
      <div className="global-container my-5">
        <div className="card login-form ">
          <div className="card-body p-5">
            <h2
              className="card-title text-center"
              style={{ color: "#ff871d", fontWeight: "medium" }}
            >
              Please Register
            </h2>
            <div className="card-text">
              {!isLoading && (
                <form onSubmit={handleLoginSubmit}>
                    <div className="form-group mb-3">
                    <label
                      for="exampleInputEmail1"
                      style={{ color: "#ff871d", fontSize: "18px" }}
                    >
                      UserName
                    </label>
                    <input
                      name="name"
                      type="name"
                      className="form-control form-control-sm"
                      
                      aria-describedby="emailHelp"
                      onChange={handleOnBlur}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      for="exampleInputEmail1"
                      style={{ color: "#ff871d", fontSize: "18px" }}
                    >
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control-sm"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={handleOnBlur}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      for="exampleInputPassword1"
                      style={{ color: "#ff871d", fontSize: "18px" }}
                    >
                      Password
                    </label>

                    <input
                      name="password"
                      type="password"
                      className="form-control form-control-sm"
                      
                      onChange={handleOnBlur}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                     
                      style={{ color: "#ff871d", fontSize: "18px" }}
                    >
                      Retype Password
                    </label>

                    <input
                      name="password2"
                      type="password"
                      className="form-control form-control-sm"
                      
                      onChange={handleOnBlur}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ backgroundColor: "#ff871d", color: "white" }}
                    className="btn  btn-block"
                  >
                    Register
                  </button>

                  <div className="sign-up">
                    Already Registered?{" "}
                    <NavLink
                      style={{ textDecoration: "none", color: "#ff871d" }}
                      to="/login"
                    >
                      Please Login
                    </NavLink>
                  </div>
                </form>
              )}

              {isLoading && (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              )}
              {user?.email && (
                <div class="alert alert-success" role="alert">User Created successfully!</div>
              )}
              {authError && <div class="alert alert-danger" role="alert">{authError}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
