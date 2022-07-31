import "./AddCustomer.css";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { saveCustomer } from "../CustomerService";

export default function AddCustomer() {
  
  let history = useHistory();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [nwCustomer, setnwCustomer] = useState({
  
    first_name: "",
    last_name: "",
    email: "",
    Dob: "",
    role:"",
    gender: "",
    contact_no: "",
    cnic: "",

  });

  const onChangeState = (e) => {
    const { name, value } = e.target;
    setnwCustomer((prevCustomer) => {
      return {
        ...prevCustomer,
        [name]: value,
      };
    });
    console.log("state", nwCustomer);
  };

  const handleSaveCustomer = async (e) => {
    e.preventDefault();
    console.log("Function is called");
    const { data } = await saveCustomer(nwCustomer);
    console.log("res", data);
    history.push("/customers");
  };
  
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm" onSubmit={handleSaveCustomer}>
        
        <div className="newUserItem">
          <label>First Name<span className="alphabet">*</span></label>
          <input 
           value={nwCustomer.first_name}
           name="first_name"
           pattern="[A-Za-z]{3,50}"
           onChange={(e) => onChangeState(e)}
           type="text" placeholder="Ali" /> 
           <span className="alphabet">*Alphabets Only. Name Should Contain Atleast 3 Alphabets</span>
        </div>

        <div className="newUserItem">
          <label>Last Name<span className="alphabet">*</span></label>
          <input value={nwCustomer.last_name}
            name="last_name"
            pattern="[A-Za-z]{3,50}"
            onChange={(e) => onChangeState(e)} 
          type="text" placeholder="Ahmed" /><span className="alphabet">*Alphabets Only. Name Should Contain Atleast 3 Alphabets</span>
        </div>

        <div className="newUserItem">
          <label>Email<span className="alphabet">*</span></label>
          <input value={nwCustomer.email}
            name="email"
            onChange={(e) => onChangeState(e)} 
          type="email" placeholder="Ali12@gmail.com" />
        </div>

        <div className="newUserItem">
          <label>DOB</label>
          <input 
          value={nwCustomer.Dob}
          name="Dob"
          onChange={(e) => onChangeState(e)} type="date" placeholder="Dob" />
        </div>

        <div className="newUserItem">
          <label>Role</label>
          <input 
          value={nwCustomer.role}
          name="role"
          onChange={(e) => onChangeState(e)} type="text" placeholder="role" />
        </div>


        <div className="newUserItem">
          <label>Gender</label>
          <input 
          value={nwCustomer.gender}
          name="gender"
          onChange={(e) => onChangeState(e)} type="gender" placeholder="gender" />
        </div>

        <div className="newUserItem">
          <label>Contact Number</label>
          <input 
          value={nwCustomer.contact_no}
          name="contact_no"
          type="tel"
          pattern="[0-9]{4}-[0-9]{7}"
          onChange={(e) => onChangeState(e)}  placeholder="XXXX-XXXXXXX" />
          <span className="alphabet">*Use Given Format and Digits Only</span>
        </div>

        <div className="newUserItem">
          <label>CNIC<span className="alphabet">*</span></label>
          <input 
          value={nwCustomer.cnic}
          pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
          type="tel"
          name="cnic"
          onChange={(e) => onChangeState(e)}  placeholder="XXXXX-XXXXXXX-X" />
          <span className="alphabet">*Use Given Format and Digits Only</span>
        </div>

        <div className="newUserItem">
          <label>Status</label>
          <input 
          value={nwCustomer.status}
          name="status"
          onChange={(e) => onChangeState(e)} type="tel" placeholder="0/1" />
        </div>

         {/* <div className="newUserItem">
          <label>Gender</label>
          <input type="text" placeholder="+92 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="House 79/A ,Lawyer Colony" />
        </div>

        <div className="newUserItem">
          <label>CNIC</label>
          <input type="text" placeholder="0000000000000" />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
      
       
      <button   type="submit" className="newUserButton">Add</button>
      <button className="newUserButton">Cancel</button>

      </form>

    </div>
  );
}
