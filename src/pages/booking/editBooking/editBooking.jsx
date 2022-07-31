import { useEffect, useState } from "react";
import {
  Publish,
} from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
import { getBookingById, updateBooking } from "../BookingService";
import "./editBooking.css";

export default function EditBooking() {
  let history = useHistory();
  const { bookingId } = useParams();
  const [editBooking, setEditBooking] = useState();

  useEffect(async () => {
    const res = await getBookingById(bookingId);
    console.log("res get by id", res.data);
    setEditBooking(res.data);

  }, []);

  const onChangeState = (e) => {
    const { name, value } = e.target;
    setEditBooking((prevBooking) => {
      return {
        ...prevBooking,
        [name]: value,
      };
    });
    console.log("state", editBooking);
  };

  const handleEditBooking = async (e) => {
    e.preventDefault();
    console.log("Function is called");
    const { data } = await updateBooking(editBooking, bookingId);
    console.log("res edit", data);
    history.push("/bookings");
  };

  return (
    <div className="booking">
      <div className="bookingContainer">
      
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
      
        <div className="bookingUpdate">
          <span className="bookingUpdateTitle">Edit Booking</span>
          <form className="bookingUpdateForm" onSubmit={handleEditBooking}>
            <div className="bookingUpdateLeft">
              <div className="bookingUpdateItem">
                <label>Renter Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ali"
                  className="bookingUpdateInput"
                  value={editBooking?.name}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>
              <div className="bookingUpdateItem">
                <label>Father Name</label>
                <input
                  type="text"
                  name="father_name"
                  placeholder="Ahmed"
                  className="bookingUpdateInput"
                  value={editBooking?.father_name}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="bookingUpdateItem">
                <label>CNIC</label>
                <input
                  type="text"
                  name="cnic"
                  placeholder="00000000000"
                  pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
                  className="bookingUpdateInput"
                  value={editBooking?.cnic}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>


              <div className="bookingUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="ali99@gmail.com"
                  className="bookingUpdateInput"
                  value={editBooking?.email}
                  onChange={(e) => onChangeState(e)} 
                />
              </div>

              <div className="bookingUpdateItem">
                <label>Phone</label>
                <input
                  type="tel"
                  name="price"
                  pattern="[0-9]{4}-[0-9]{7}"
                  placeholder=""
                  className="bookingUpdateInput"
                  value={editBooking?.price}
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
            <div className="bookingUpdateRight">
              <div className="bookingUpdateUpload">
                 {/* <img
                  className="bookingUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="bookingUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} /> */}
              </div>
              <button className="bookingUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
