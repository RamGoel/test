import "./featuredInfo.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCustomerCount, getBookingCount, getVehicleCount, getDriverCount, getVehicleOnTour, getRevenue } from "./featureInfoService";

export default function FeaturedInfo() {
    const history = useHistory();
    const [customerCount, setCustomerCount] = useState(0);
    const [bookingCount, setBookingCount] = useState(0);
    const [vehicleCount, setVehicleCount] = useState(0);
    const [driverCount, setDriverCount] = useState(0);
    const [vehicleOnTour, setVehicleOnTour] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(async () => {
      const customerRes = await getCustomerCount();
      const bookingRes = await getBookingCount();
      const vehicleRes = await getVehicleCount();
      const driverRes = await getDriverCount();
      const vehicleOnTourRes = await getVehicleOnTour();
      const revenueRes = await getRevenue();
      setCustomerCount(customerRes.data);
      setBookingCount(bookingRes.data);
      setVehicleCount(vehicleRes.data);
      setDriverCount(driverRes.data);
      setVehicleOnTour(vehicleOnTourRes.data);
      setRevenue(parseInt(revenueRes.data));
    }, []);
  
    function handleClks() {
      history.push("/bookings");
    }

    function handleClk() {
      history.push("/customers");
    }

    function handleClick() {
      history.push("/cars");
    }

    function handleClic() {
      history.push("/drivers");
    }

    function handleClik() {
      history.push("/riskVehicle");
    }


  return (

    
    <div className="container-fluid" >
      <div className="featured1">
        <div sm={4} className="featuredItem1" onClick={handleClks}>
        <span className="featuredTitle2">BOOKINGS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney2">{bookingCount?.toLocaleString()}</span>
          <span className="featuredMoneyRate"></span>
        </div>
      </div> 
      
      <div sm={4} className="featuredItem2" onClick={handleClk}>
        <span className="featuredTitle2">CUSTOMERS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney2">{customerCount?.toLocaleString()}</span>
        </div>   
      </div>

      <div sm={4} className="featuredItem3" onClick={handleClick}>
        <span className="featuredTitle2">VEHICLES</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney2">{vehicleCount?.toLocaleString()}</span>  
        </div>
      </div>

      <div sm={4} className="featuredItem3"  onClick={handleClic}>
        <span className="featuredTitle2">Drivers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney2">{driverCount?.toLocaleString()}</span>  
        </div>
      </div>
      </div>

      <div className="featured2"> 

      
      <div sm={4} className="featuredItem4" >
        <span className="featuredTitle2">REVENUE/MONTH</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney2">{revenue?.toLocaleString()}</span>
        </div>   
      </div>

      <div sm={4} className="featuredItem4">
        <span className="featuredTitle2">ON TOUR VEHICLES</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney2">{vehicleOnTour?.toLocaleString()}</span>  
        </div>
      </div>

      <div sm={4} className="featuredItem5" onClick={handleClik}>
        <span className="featuredTitle2">ON RISK VEHICLES</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney2">0</span>  
        </div>
      </div>
      </div>
      {/* <div className="featured3">
      <div sm={4} className="featuredItem6">
        <span className="featuredTitle">REVENUE/DAY</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">00</span>
          <span className="featuredMoneyRate"></span>
        </div>
      </div>
     
      <div sm={4} className="featuredItem8">
        <span className="featuredTitle">REVENUE/YEAR</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">00</span>  
        </div>
      </div>
      </div> */}
    </div>
  );
}