import { useEffect, useState } from "react";
import { Publish} from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
// import { editDriver } from "../../driverdetail/DriverService";
import { getDriverById, updateDriver } from "../../driverdetail/DriverService";
import "./EditDriver.css";

export default function EditDriver() {
  let history = useHistory();
  const { driverId  } = useParams();
  const [editdriver, setEditDriver] = useState();

  useEffect(async () => {
    const res = await getDriverById(driverId);
    console.log("res get by id", res.data);
    setEditDriver(res.data);

  }, []);

  const onChangeState = (e) => {
    const { name, value } = e.target;
    setEditDriver((prevDriver) => {
      return {
        ...prevDriver,
        [name]: value,
      };
    });
    console.log("state", editdriver);
  };

  const handleEditDriver = async (e) => {
    e.preventDefault();
    console.log("Function is called");
    const { data } = await updateDriver(editdriver, driverId);
    console.log("res edit", data);
    history.push("/drivers");
  };

  return (
    <div className="driver">
      <div className="driverContainer">
      
        {/* <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ali </span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>

            
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div> */}


      
        <div className="driverUpdate">
          <span className="driverUpdateTitle">Edit Driver</span>
          <form className="driverUpdateForm" on onSubmit={handleEditDriver}>
            <div className="driverUpdateLeft">
              <div className="driverUpdateItem">
                <label>Driver Name</label>
                <input
                  type="text"
                  name="dr_name"
                  placeholder="Ali"
                  className="drivrUpdateInput"
                  value={editdriver?.dr_name}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>
              <div className="driverUpdateItem">
                <label>Join Date</label>
                <input
                  type="date"
                  name="dr_join"
                  placeholder="Ahmed"
                  className="driverUpdateInput"
                  value={editdriver?.dr_join}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="driverUpdateItem">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="dr_mobile"
                  placeholder="00000000000"
                  className="userUpdateInput"
                  value={editdriver?.dr_mobile}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>


              <div className="driverUpdateItem">
                <label>Licence Number</label>
                <input
                  type="text"
                  name="dr_licence"
                  placeholder=""
                  className="driverUpdateInput"
                  value={editdriver?.dr_licence}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="driverUpdateItem">
                <label>Licence Valid Till</label>
                <input
                  type="date"
                  name="dr_licence_valid"
                  placeholder=""
                  className="driverUpdateInput"
                  value={editdriver?.dr_licence_valid}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="driverUpdateItem">
                <label>CNIC</label>
                <input
                  type="text"
                  name="dr_cnic"
                  placeholder=""
                  className="driverUpdateInput"
                  value={editdriver?.dr_cnic}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="driverUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  name="dr_address"
                  placeholder=""
                  className="driverUpdateInput"
                  value={editdriver?.dr_address}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="driverUpdateItem">
                <label>Experience</label>
                <input
                  type="text"
                  name="dr_available"
                  placeholder=""
                  className="driverUpdateInput"
                  value={editdriver?.dr_available}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+92 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="79/A,Lawyer Town"
                  className="userUpdateInput"
                />
              </div> */}
            </div>
            <div className="driverUpdateRight">
               {/* <div className="driverUpdateUpload">
                <img
                  className="driverUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                
                <label htmlFor="file">
                
                  <Publish className="driverUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>  */}
              <button className="driverUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
