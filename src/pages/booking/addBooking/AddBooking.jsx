import "./AddBooking.css";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { saveBooking } from "../BookingService";
import { getCustomers } from "../../customer/CustomerService";
import { getVehicles } from "../../cars/CarService";


export default function AddBooking() {

  let history = useHistory();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [customers, setCustomers] = useState([]);
  const [cars, setCars] = useState([]);
  const [nwBooking, setnwBooking] = useState({
        name: "",
        father_name: "",
        email: "",
        cnic: "",
        address: "",
        gender: "",
        price:"",
        car_name: "",
        service: "",
        status:"2",
        user_uuid: "",
        date_in:"",
        date_out: "",
  });

  useEffect(async () => {
    const customerResponse = await getCustomers();
    setCustomers(customerResponse.data);
    const vehicleResponse = await getVehicles();
    setCars(vehicleResponse.data);
  }, []);

  const onChangeState = (e) => {
    const { name, value } = e.target;
    setnwBooking((prevBooking) => {
      return {
        ...prevBooking,
        [name]: value,
      };
    });
    console.log("state", nwBooking);
  };

  const handleSaveBooking = async (e) => {
    e.preventDefault();
    console.log("Function is called");
    const { data } = await saveBooking(nwBooking);
    console.log("res", data);
    history.push("/bookings");
  };

  return (
    <div className="newBooking">
      <h1 className="newBookingTitle">Create Booking</h1>
      <form className="newBookingForm"  onSubmit={handleSaveBooking}>

      
      <div className="newBookingItem">
          <label>User</label>
          <select className="newBookingSelect" name="user_uuid" id="active" value={nwBooking.user_uuid}
            onChange={(e) => onChangeState(e)}>
            <option value="">...</option>
            <option value="guest">Guest </option>
            {customers.map(customer => (
              <option key={customer.uuid} value={customer.uuid}>{`${customer.first_name} ${customer.last_name}`}</option>
            ))}
            
          </select>
        </div>

        <div className="newBookingItem">
          <label>Renter Name<span className="alphabetz">*</span></label>
         <input value={nwBooking.name}
           name="name"
          //  pattern="[A-Za-z]{3,50}"
           onChange={(e) => onChangeState(e)}
           type="text" placeholder="Ali" required />
                      <span className="alphabetz">*Alphabets Only. Name Should Contain Atleast 3 Alphabets</span>

        </div>
        <div className="newBookingItem">
          <label>Father Name</label>
          <input value={nwBooking.father_name}
            name="father_name"
            // pattern="[A-Za-z]{3,50}"
            onChange={(e) => onChangeState(e)} 
          type="text" placeholder="Ahmed" />
                     <span className="alphabetz">*Alphabets Only. Name Should Contain Atleast 3 Alphabets</span>

        </div>

        <div className="newBookingItem">
          <label>Address</label>
          <input value={nwBooking.address}
            name="address"
            onChange={(e) => onChangeState(e)} 
          type="text" placeholder="Ahmed" />
        </div>
         
         <div className="newBookingItem">
          <label>Car Name<span className="alphabetz">*</span></label>
          <select className="newBookingSelect" value={nwBooking.car_name} name="car_name" id="active" onChange={(e) => onChangeState(e)} required > 
            <option value="">...</option>
            {cars.map(car => (
              <option key={car.uuid} value={car.company}>{`${car.company} ${car.veh_reg} ${car.veh_available}`}</option>
            ))}
          </select>
        </div>
         <div className="newBookingItem">
          <label>CNIC<span className="alphabetz">*</span></label>
          <input type="text" placeholder="XXXXX-XXXXXXX-X" value={nwBooking.cnic}
           pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
            name="cnic"
            onChange={(e) => onChangeState(e)} required />
                        <span className="alertz">*No Duplicate Entry Accepted</span>

        </div> 
       

         {/* <div className="newBookingItem">
          <label></label>
          <input type="text" placeholder="3840117000000" />
        </div> */}
        

        <div className="newBookingItem">
          <label>DateOut</label>
          <input type="date" placeholder="17/12/2021"
          value={nwBooking.date_out}
          name="date_out"
          onChange={(e) => onChangeState(e)} required/>
        </div>

        <div className="newBookingItem">
          <label>DateIn</label>
          <input type="date" placeholder="15/12/2021" value={nwBooking.date_in}
            name="date_in"
            onChange={(e) => onChangeState(e)} required />
        </div>

        <div className="newBookingItem">
          <label>Email<span className="alphabetz">*</span></label>
          <input type="email" placeholder=""
          value={nwBooking.email}
          name="email"
          onChange={(e) => onChangeState(e)} required />
        </div>

        <div className="newBookingItem">
          <label>Phone</label>
          <input type="text" placeholder="XXXX-XXXXXXX"
          value={nwBooking.price}
          name="price"
          pattern="[0-9]{4}-[0-9]{7}"
          onChange={(e) => onChangeState(e)} />
           <span className="alertz">*Fill According to Given Format</span>
        </div>

       

        <div className="newBookingItem">
          <label>Service</label>
          <select className="newBookingSelect" name="service" id="active" value={nwBooking.service}
            onChange={(e) => onChangeState(e)} required>
            <option value="yes">...</option>
            <option value="self">Self </option>
            <option value="with_driver">With Driver </option>
            
          </select>
        </div>

        <div className="newBookingItem">
          <label>Gender</label>
          <select className="newBookingSelect" name="gender" id="active" value={nwBooking.gender}
            onChange={(e) => onChangeState(e)} required>
            <option value="yes">...</option>
            <option value="male">Male </option>
            <option value="female">Female </option>
            
          </select>
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
   
      
        <button type="submit" className="newbookButton">Add</button>
        <button className="newbookButton">Cancel</button>
         
       

      </form>
    </div>
  );
      }
    
