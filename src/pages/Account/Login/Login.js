import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
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
              Please Login
            </h2>
            <div className="card-text">
              {!isLoading && (
                <form onSubmit={handleLoginSubmit}>
                   
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
                      onChange={handleOnChange}
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
                      id="exampleInputPassword1"
                      onChange={handleOnChange}
                    />
                  </div>
                 
                  <button
                    type="submit"
                    style={{ backgroundColor: "#ff871d", color: "white" }}
                    className="btn  btn-block"
                  >
                    Sign in
                  </button>

                  <div className="sign-up">
                    Don't have an account?
                    <NavLink
                      style={{ textDecoration: "none", color: "#ff871d" }}
                      to="/register"
                    >
                      Create an account
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
                <div class="alert alert-success" role="alert">Logged in successfully!</div>
              )}
              {authError && <div class="alert alert-danger" role="alert">{authError}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
