import "./customerDetail.css";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useHistory, useParams } from "react-router-dom";
import { getCustomerById } from "../CustomerService";

export default function CustomerDetail() {
  const { customerId } = useParams();
  let history = useHistory();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [customerDetail, setCustomerDetail] = useState({});

  useEffect(async () => {
    const res = await getCustomerById(customerId);
    console.log("res get by id", res.data);
    setCustomerDetail(res.data);
  }, []);
  
  return (
    <div className="dnewUser">
      <h1 className="dnewUserTitle">Customer Detail</h1>
      <form className="dnewUserForm">
        <div className="dnewUserItem">
          <label>First Name<span className="alphabet">*</span></label>
          <input style={{border: 'none'}}
           value={customerDetail?.first_name}
           name="first_name"
           pattern="[A-Za-z]{3,50}"
           type="text" placeholder="Ali" disabled /> 
        </div>

        <div className="dnewUserItem">
          <label>Last Name<span className="alphabet">*</span></label>
          <input style={{border: 'none'}}
           value={customerDetail?.last_name}
            name="last_name"
            pattern="[A-Za-z]{3,50}"
          type="text" placeholder="Ahmed" />
        </div>

        <div className="dnewUserItem">
          <label>Email<span className="alphabet">*</span></label>
          <input style={{border: 'none'}}
           value={customerDetail?.email}
            name="email"
          type="email" placeholder="Ali12@gmail.com" />
        </div>

        <div className="dnewUserItem">
          <label>DOB</label>
          <input style={{border: 'none'}}
          value={customerDetail?.Dob}
          name="Dob" type="date" placeholder="Dob" />
        </div>

        <div className="dnewUserItem">
          <label>Role</label>
          <input style={{border: 'none'}}
          value={customerDetail?.role}
          name="role" type="text" placeholder="role" />
        </div>


        <div className="dnewUserItem">
          <label>Gender</label>
          <input style={{border: 'none'}}
          value={customerDetail?.gender}
          name="gender" type="gender" placeholder="gender" />
        </div>

        <div className="dnewUserItem">
          <label>Contact Number</label>
          <input style={{border: 'none'}}
          value={customerDetail?.contact_no}
          name="contact_no"
          type="tel"
          pattern="[0-9]{4}-[0-9]{7}"  placeholder="XXXX-XXXXXXX" />
        </div>

        <div className="dnewUserItem">
          <label>CNIC<span className="alphabet">*</span></label>
          <input style={{border: 'none'}}
          value={customerDetail?.cnic}
          pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
          type="tel"
          name="cnic"  placeholder="XXXXX-XXXXXXX-X" />
        </div>

        <div className="dnewUserItem">
          <label>Status</label>
          <input style={{border: 'none'}}
          value={customerDetail?.status}
          name="status" type="tel" placeholder="0/1" />
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
      </form>
    </div>
  );
}
