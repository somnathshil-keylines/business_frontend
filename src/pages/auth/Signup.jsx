import React, { useState } from 'react'
import Input from '../../components/Input'
import "../../styles/pages/signup.css";
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [address, setAddress] = useState("");
    
    const submitForm = async() => {
      try {
         const response = axios.post(
           "http://localhost/business/public/api/v1/signup",
           {
             name,
             email,
             phone,
             password,
             role,
             address,
           }
         );
         
         if (response.data.status) {
           alert(response.data.message);
           console.log(response);
         } else {
           alert(response.data.message);
           console.log(response);
         }
      } catch (error) {
        console.error(error.response?.data || error.message);
        alert("Signup failed!");
      }
    }
  return (
    <>
      <div className="form-container">
        <Heading text="Sign Up" tagName="h6" />
        <div className="signup-form">
          <Input
            placeholder="Name"
            value={name}
            label="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="emailPhone">
            <Input
              placeholder="Email"
              value={email}
              label="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              placeholder="Phone"
              value={phone}
              label="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="passwordAddress">
            <Input
              placeholder="Password"
              value={password}
              label="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input
              placeholder="Address"
              value={address}
              label="address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <Input
            type="select"
            placeholder="Role"
            value={role}
            label="role"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            options={[
              { label: "Customer", value: "customer" },
              { label: "Admin", value: "admin" },
              { label: "Seller", value: "seller" },
            ]}
          />
          <Button
            text="Sign up"
            type="button"
            onclick={(e) => {
              submitForm();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Signup
