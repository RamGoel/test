import "./riskvehicle.css";
import { ArrowDownward, ArrowUpward, Waves, OpacityTwoTone} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function RISKVehicle() {

    const history = useHistory();
  
    // function handleClik() {
    //   history.push("/bookings");
    // }

    // function handleClk() {
    //   history.push("/");
    // }

    // function handleClick() {
    //   history.push("/");
    // }

    // function handleClic() {
    //   history.push("/drivers");
    // }

    // function handleClik() {
    //   history.push("/");
    // }


  return (

    
    <div className="container-fluid" >
      <div className="risk1">
        {/* <div sm={4} className="featuredItem1" >
        <span className="featuredTitle">BOOKINGS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">00</span>
          <span className="featuredMoneyRate"></span>
        </div>
      </div>  */}
      
      <div sm={8} className="riskItem2">
      <Waves  color="secondary" fontSize="large" /> 
        <span className="riskTitle1">Battery Voltage</span>
        <div className="riskMoneyContainer">
          <span className="featuredMoney1"></span>
        </div>   
      </div>

      <div sm={8} className="riskItem3" >
      < OpacityTwoTone color="secondary" fontSize="large" /> 
        <span className="riskTitle1">Oil Level</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney1"></span>  
        </div>
      </div>

      {/* <div sm={8} className="riskItem3"  onClick={handleClic}>
        <span className="riskTitle1">Drivers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney1">00</span>  
        </div>
      </div> */}
      </div>

      <div className="risk2"> 

      
       <div sm={4} className="riskItem4" >
        <span className="riskTitle">REVENUE/MONTH</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">00</span>
        </div>   
      </div>

      <div sm={4} className="riskItem4">
        <span className="riskTitle">ON TOUR VEHICLES</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">00</span>  
        </div>
      </div>

      <div sm={4} className="riskItem5" >
        <span className="riskTitle">ON RISK VEHICLES</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">00</span>  
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