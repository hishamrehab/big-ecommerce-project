import React from "react";

const LoginPage = () => {
  return (
    <div
      style={{
        miHeight: "700px",
      }}
    >
      <h2>Login Form</h2>

      <form
        method="post"
        style={{
          marginBottom: "150px",
        }}
      >
        <div className="container">
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
        </div>

        <div
          className="container"
          style={{
            "background-color": "#f1f1f1",
          }}
        >
          <span className="psw">
            Don't have account ? <a href="/register">register now</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
