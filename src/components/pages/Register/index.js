import React, { useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import firebase from "../../../config/Firebase";
import { useHistory } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  let history = useHistory();

  const handleSubmit = () => {
    const data = {
      email: email,
      fullName: fullName,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //simpan ke realtime database
        const userId = userCredential.user.uid;
        firebase
          .database()
          .ref("users/" + userId)
          .set(data);

        setFullName("");
        setEmail("");
        setPassword("");
        //Redirect ke dashboard
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        //tampilkan pesan error
      });
  };
  return (
    <div className="container mt-5">
      <h3>Register</h3>
      <Input
        className="form-control"
        label="Nama Lengkap"
        placeholder="Masukkan nama lengkap"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
      />
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
      <Button text="Register" onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
