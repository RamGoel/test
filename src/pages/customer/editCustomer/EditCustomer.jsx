import { useEffect, useState } from "react";
import {
  Publish,
} from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
import "./editCustomer.css";
import { getCustomerById, updateCustomer } from "../CustomerService";

export default function EditCustomer() {
  let history = useHistory();
  const { customerId } = useParams();
  const [editCustomer, setEditCustomer] = useState();

  useEffect(async () => {
    const res = await getCustomerById(customerId);
    console.log("res get by id", res.data);
    setEditCustomer(res.data);

  }, []);

  const onChangeState = (e) => {
    const { name, value } = e.target;
    setEditCustomer((prevCustomer) => {
      return {
        ...prevCustomer,
        [name]: value,
      };
    });
    console.log("state", editCustomer);
  };

  const handleUpdateCustomer = async (e) => {
    e.preventDefault();
    console.log("Function is called");
    const { data } = await updateCustomer(editCustomer, customerId);
    console.log("res edit", data);
    history.push("/customers");
  };
  return (
    <div className="user">
      <div className="userContainer">
      
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

      
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleUpdateCustomer}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="userUpdateInput"
                  name="first_name"
                  value={editCustomer?.first_name}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="userUpdateInput"
                  name="last_name"
                  value={editCustomer?.last_name}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="userUpdateItem">
                <label>CNIC</label>
                <input
                  type="text"
                  placeholder="XXXXX-XXXXXXX-X"
                  className="userUpdateInput"
                  name="cnic"
                  pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                  value={editCustomer?.cnic}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="email"
                  value={editCustomer?.email}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="userUpdateItem">
                <label>DOB</label>
                <input
                  type="Date"
                  placeholder=""
                  className="userUpdateInput"
                  name="Dob"
                  value={editCustomer?.Dob}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

               
              <div className="userUpdateItem">
                <label>Role</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="role"
                  value={editCustomer?.role}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              
              <div className="userUpdateItem">
                <label>Contact Number</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="contact_no"
                  pattern="[0-9]{5}-[0-9]{7}"
                  value={editCustomer?.contact_no}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              
              <div className="userUpdateItem">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="gender"
                  value={editCustomer?.gender}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

               
              <div className="userUpdateItem">
                <label>Status</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                  name="status"
                  value={editCustomer?.status}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <button type="submit" className="userUpdateButton">Update</button>

            </div>

            <div className="userUpdateRight">
              {/* <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div> */}
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
