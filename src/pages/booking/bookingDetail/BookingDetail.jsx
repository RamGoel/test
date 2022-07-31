import "./bookingDetail.css";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getBookingById } from "../BookingService";


export default function BookingDetail() {

    const { bookingId } = useParams();
  let history = useHistory();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [bookingDetail, setBookingDetail] = useState({});
 
  useEffect(async () => {
    const res = await getBookingById(bookingId);
    console.log("res get by id", res.data);
    setBookingDetail(res.data);
  }, []);
  

 

  return (
    <div className="dnewBooking">
      <h1 className="newBookingTitle">Detail Booking</h1>
      <form className="newBookingForm" >

      
      <div className="dnewBookingItem">
          <label>User</label>
          <input className="dnewBookingSelect" name="user_uuid" style={{border: 'none'}} id="active" value={bookingDetail.user_uuid} disabled/>        
          
        </div>

        <div className="dnewBookingItem">
          <label>Renter Name<span className="alphabetz">*</span></label>
         <input value={bookingDetail.name}
         style={{border: 'none'}}
           name="name"
          //  pattern="[A-Za-z]{3,50}"
           type="text" placeholder="Ali" disabled />

        </div>
        <div className="dnewBookingItem">
          <label>Father Name</label>
          <input value={bookingDetail.father_name}
          style={{border: 'none'}}
            name="father_name"
            // pattern="[A-Za-z]{3,50}"
          type="text" placeholder="Ahmed" disabled/>

        </div>

        <div className="dnewBookingItem">
          <label>Address</label>
          <input value={bookingDetail.address}
          style={{border: 'none'}}
            name="address"
          type="text" placeholder="Ahmed" disabled />
        </div>
         
         <div className="dnewBookingItem">
          <label>Car Name<span className="alphabetz">*</span></label>
          <input className="dnewBookingSelect" style={{border: 'none'}} value={bookingDetail.car_name} name="car_name" id="active"  disabled />
          
        </div>
         <div className="dnewBookingItem">
          <label>CNIC<span className="alphabetz">*</span></label>
          <input type="text" placeholder="XXXXX-XXXXXXX-X" value={bookingDetail.cnic}
          style={{border: 'none'}}
           pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
            name="cnic"
            disabled />

        </div> 
       

         {/* <div className="newBookingItem">
          <label></label>
          <input type="text" placeholder="3840117000000" />
        </div> */}
        

        <div className="dnewBookingItem">
          <label>DateOut</label>
          <input type="text" placeholder="17/12/2021"
          style={{border: 'none'}}
          value={bookingDetail.date_out}
          name="date_out"
        disabled/>
        </div>

        <div className="dnewBookingItem">
          <label>DateIn</label>
          <input type="text" placeholder="15/12/2021" value={bookingDetail.date_in}
          style={{border: 'none'}}
            name="date_in"
            disabled />
        </div>

        <div className="dnewBookingItem">
          <label>Email<span className="alphabetz">*</span></label>
          <input type="email" placeholder=""
          style={{border: 'none'}}
          value={bookingDetail.email}
          name="email"
          disabled />
        </div>

        <div className="dnewBookingItem">
          <label>Phone</label>
          <input type="text" placeholder="XXXX-XXXXXXX"
          style={{border: 'none'}}
          value={bookingDetail.price}
          name="price"
          pattern="[0-9]{4}-[0-9]{7}"
         disabled />
        </div>

       

        <div className="dnewBookingItem">
          <label>Service</label>
          <input className="dnewBookingSelect" style={{border: 'none'}} name="service" id="active" value={bookingDetail.service}
           disabled /> 
        
        </div>

        <div className="dnewBookingItem">
          <label>Gender</label>
          <input className="dnewBookingSelect" style={{border: 'none'}} name="gender" id="active" value={bookingDetail.gender}
           disabled />
           
        </div><br></br>

        {/* <div className="newBookingItem">
          <label>Status</label>
          <select className="newBookingSelect" name="status" id="active" value={nwBooking.status}
            onChange={(e) => onChangeState(e)}>
            <option value="yes">...</option>
            <option value="0">0 </option>
            <option value="1">1 </option>
            
          </select>
        </div> */}
         
       

      </form>
    </div>
  );
      }
    
