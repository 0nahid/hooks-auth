import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="" />
        <br /> <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="" />
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Already a user?</Link>
    </div>
  );
}
