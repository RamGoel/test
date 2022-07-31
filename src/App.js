import "./App.css";
// import { useMediaQuery } from "react-responsive";
import Home from "./pages/home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import CustomerList from "./pages/customer/customerList/CustomerList";
import CustomerDetail from "./pages/customer/customerDetail/CustomerDetail";
import EditCustomer from "./pages/customer/editCustomer/EditCustomer";
import AddCustomer from "./pages/customer/addCustomer/AddCustomer";
import CarList from "./pages/cars/carList/CarList";
import AddCar from "./pages/cars/addCar/AddCar";
import EditCar from "./pages/cars/editCar/EditCar";
import CarDetail from "./pages/cars/carDetail/carDetail";
import BookingList from "./pages/booking/bookingList/BookingList";
import AddBooking from "./pages/booking/addBooking/AddBooking";
import EditBooking from "./pages/booking/editBooking/editBooking";
import BookingDetail from "./pages/booking/bookingDetail/BookingDetail";
import Login from "./containers/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DriverList from "./pages/driverdetail/driverList/DriverList";
import AddDriver from "./pages/driverdetail/addDriver/AddDriver";
import EditDriver from "./pages/driverdetail/editDriver/EditDriver";
import DriverDetail from "./pages/driverdetail/DetailDriver/DriverDetail";
import RISKVehicle from "./pages/Risks/riskVehicle";


function App() {
  return (
    <BrowserRouter>

    <Route exact path="/signin" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute path="/customers" component={CustomerList} />
    <ProtectedRoute path="/customer/:customerId" component={EditCustomer} />
    <ProtectedRoute path="/addCustomer" component={AddCustomer} />
    <ProtectedRoute path="/detailCustomer/:customerId" component={CustomerDetail} />
    <ProtectedRoute path="/cars" component={CarList} />
    <ProtectedRoute path="/car/:carId" component={EditCar} />
    <ProtectedRoute path="/addCar" component={AddCar} />
    <ProtectedRoute path="/carDetail/:carId" component={CarDetail} />
    <ProtectedRoute path="/detailbooking/:bookingId" component={BookingDetail} />
    <ProtectedRoute path="/bookings" component={BookingList} />
    <ProtectedRoute path="/booking/:bookingId" component={EditBooking} />
    <ProtectedRoute path="/addBooking" component={AddBooking} />
    <ProtectedRoute path="/drivers" component={DriverList} />
    <ProtectedRoute path="/driver/:driverId" component={EditDriver} />
    <ProtectedRoute path="/addDriver" component={AddDriver} />
    <ProtectedRoute path="/detailDriver/:driverId" component={DriverDetail} />   
    <ProtectedRoute path="/riskVehicle" component={RISKVehicle} />



    </BrowserRouter>
   

  );
}

export default App;
