import React from "react";

const Register = () => {
  return (
    <form
      style={{
        miHeight: "700px",
      }}
    >
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

    
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />

       
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />

       
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        />
        <hr />
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>

        <button type="submit" className="registerbtn">
          Register
        </button>
      </div>

      <div className="container signin">
        <p>
          Already have an account? <a href="/login">Sign in</a>.
        </p>
      </div>
    </form>
  );
};

export default Register;
