import React, { useState, useEffect } from "react";
import firebase from "../../../config/Firebase";
import { useHistory } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  useEffect(() => {
    console.log("component did mount");
  }, []);

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => history.push("/"))
      .catch((error) => console.log("Error", error));
  };
  return (
    //JSX
    <div className="container mt-5">
      <h3>Login</h3>

      <Input
        className="form-control"
        label="Email"
        placeholder="Masukkan email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        className="form-control"
        label="Password"
        placeholder="Masukkan password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <br />
      <Button text="Submit" onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
