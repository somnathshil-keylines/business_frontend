import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import "../../styles/pages/login.css";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]  = useState(false);

  const navigate = useNavigate();

   const submitForm = async () => {
     try {
        setLoading(true);
        setError(false);
         const response = await axios.post(
           "http://localhost/business/public/api/v1/login",
           { email, password }
         );
         console.log(response.data);
         const token = response.data.token;
         localStorage.setItem("token", token);
         setLoading(false);
          navigate("/");
       } catch (error) {
           setError(true);
           setLoading(false);
       }
     }; 

     if (error) {
       return (
         <>
           <Error />
         </>
       );
     }
 

  return (
    <>
      <div className="form-container">
        <Heading text="Log In" tagName="h6" />
        <div className="signup-form">
          <Input
            placeholder="Email"
            value={email}
            label="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
             type="password"
            placeholder="Password"
            value={password}
            label="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            text={loading ? "Logging in .." : "Log in"}
            type="button"
            onclick={submitForm}
            disabled={loading}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
