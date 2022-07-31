import "./BookingList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { bookingRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteBooking, getBookings, updateStatus } from "../BookingService";
import DeleteConfirmDialog from "../../../components/DeleteConfirmDialog";
   
    
export default function BookingList() {
    
  const [openState, setopenState] = useState(false);
  const [bookingList, setBookingList] = useState([]);
  const [bookingId, setBookingId] = useState("");

  useEffect(async () => {
    const res = await getBookings();
    setBookingList(res.data);

    console.log("resp", res);
  }, []);

  const handleDeleteDialog = async (id) => {
    setopenState(true);
    setBookingId(id);
  };

  const handleDelete = async () => {
    setopenState(false);
    setBookingList(bookingList.filter((item) => item.id !== bookingId));
    const res = await deleteBooking(bookingId);
    console.log("res", res);
 };

 const acceptBooking = async (email, id) => {
  const res = await updateStatus({email: email , status: '1'}, id);
  console.log("res", res);
  const getRes = await getBookings();
  setBookingList(getRes.data);
 };

 const rejectBooking = async (email, id) => {
  const res = await updateStatus({email: email , status: '0'}, id);
  console.log("res", res);
  const getRes = await getBookings();
  setBookingList(getRes.data);
 };
 

  const columns = [
    // { field: "id", headerName: "ID",headerClassName:'headerClr', width: 100 },
    {
      field: "name",
      headerName: "Renter Name",
      headerClassName:'headerClr',
      width: 150,
    },

    { field: "father_name", headerName: "Father Name", headerClassName:'headerClr', width: 170 },
  

    // {
    //   field: "address",
    //   headerName: "Address",
    //   headerClassName:'headerClr',
    //   width: 160,
    // },

   

    // {
    //     field: "phone",
    //     headerName: "Phone",
    //     headerClassName:'headerClr',
    //     width: 160,
    //   },

      {
        field: "cnic",
        headerName: "CNIC",
        headerClassName:'headerClr',
        width: 160,
      },

      // {
      //   field: "email",
      //   headerName: "Email",
      //   headerClassName:'headerClr',
      //   width: 160,
      // },

      {
        field: "car_name",
        headerName: "Car Name",
        headerClassName:'headerClr',
        width: 170,
      },


      // {
      //   field: "date_out",
      //   headerName: "DateOut",
      //   headerClassName:'headerClr',
      //   width: 160,
      // },

      // {
      //   field: "date_in",
      //   headerName: "DateIn",
      //   headerClassName:'headerClr',
      //   width: 160,
      // },

      // {
      //   field: "service",
      //   headerName: "Service",
      //   headerClassName:'headerClr',
      //   width: 160,
      // },

      {
        field: "gender",
        headerName: "Gender",
        headerClassName:'headerClr',
        width: 160,
      },

   

    {
      field: "action",
      headerName: "Action",
      headerClassName:'headerClor',
      width: 270,
      renderCell: (params) => {

        return (
          <>
            <Link to={"/booking/" + params.row.uuid}>
              <button className="bookingListEdit">Update</button>
            </Link>
              <button className="bookingListAccept" onClick={() => acceptBooking(params.row.email, params.row.uuid)} hidden={params.row.status === '1'}>Accept</button>
              <button className="bookingListReject" onClick={() => rejectBooking(params.row.email, params.row.uuid)} hidden={params.row.status === '0'}>Reject</button>
              <button className="bookingListDelete" onClick={() => handleDeleteDialog(params.row.id)} >Delete</button>
              <Link to={"/detailbooking/" + params.row.uuid}>
              <button className="bookingListEdit">Detail</button>
            </Link>
          </>
        );
       
      },
    },
  ];

  return (
    <div className="bookingList">
      <div className="bookingTitleContainer">
        <h1 className="bookingTitle">Bookings</h1>
        <Link to="/addBooking">
          <button className="bookingAddButtonn">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={bookingList}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row)=>row.id}
        checkboxSelection     
      />

<DeleteConfirmDialog
        open={openState}
        setOpen={setopenState}
        deleteItem={handleDelete}
      />
    </div>


  );
}

