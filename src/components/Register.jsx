import React from "react";
import "./css/account.css";

const Register = () => {
  return (
    <div style={{ width: "47%" }}>
      <h2 className="account-register">Register</h2>
      <form action="" className="sign-up-form">
        <label htmlFor="email">
          Username or Email Address{" "}
          <span style={{ color: "red" }} className="required">
            *
          </span>
        </label>
        <input type="email" name="email" id="register-email" required></input>
        <p>A link to set a new password will be sent to your email address.</p>
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <a href="# "> privacy policy.</a>
        </p>
        <button className="btn btn-outline-danger submit" type="submit">
          REGISTER
        </button>
      </form>
    </div>
  );
};

export default Register;
