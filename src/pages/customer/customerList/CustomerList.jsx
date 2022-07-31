import "./customerList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteCustomer, getCustomers } from "../CustomerService";
import DeleteConfirmDialog from "../../../components/DeleteConfirmDialog";

export default function CustomerList() {
  const [openState, setopenState] = useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [customerId, setCustomerId] = useState("");

  useEffect(async () => {
    const res = await getCustomers();
    setCustomerList(res.data);

    console.log("resp", res);
  }, []);

  const handleDeleteDialog = async (id) => {
    setopenState(true);
    setCustomerId(id);
  };

  const handleDelete = async () => {
     setopenState(false);
    setCustomerList(customerList.filter((item) => item.id !== customerId));
    const res = await deleteCustomer(customerId);
    console.log("res", res);
  };
  
  const columns = [
    // { field: "id", headerName: "ID", width: 100 },
    // {
    //   field: "user",
    //   headerName: "User",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avatar} alt="" />
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    { field: "first_name", headerName: "First Name",headerClassName:'headerClr' , width: 150 },
    { field: "last_name", headerName: "Last Name",headerClassName:'headerClr' , width: 150 },
    {
      field: "cnic",
      headerClassName:'headerClr',
      headerName: "CNIC",
      width: 120,
    },


    {
      field: "email",
      headerClassName:'headerClr',
      headerName: "Email",
      width: 120,
    },

    {
      field: "Dob",
      headerClassName:'headerClr',
      headerName: "DOB",
      width: 120,
    },

    // {
    //   field: "role",
    //   headerClassName:'headerClr',
    //   headerName: "Role",
    //   width: 120,
    // },

    {
      field: "gender",
      headerClassName:'headerClr',
      headerName: "Gender",
      width: 120,
    },

    // {
    //   field: "contact_no",
    //   headerClassName:'headerClr',
    //   headerName: "Contact No.",
    //   width: 160,
    // },

    // {
    //   field: "Password",
    //   headerClassName:'headerClr',
    //   headerName: "Contact No.",
    //   width: 160,
    // },

    // {
    //   field: "Confirm_Password",
    //   headerClassName:'headerClr',
    //   headerName: "Contact No.",
    //   width: 160,
    // },
    {
      field: "action",
      headerClassName:'headerClr',
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/customer/" + params.row.uuid}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDeleteDialog(params.row.id)}
            />
            <Link to={"/detailCustomer/" + params.row.uuid}>
              <button className="userListEdit">Detail</button>
            </Link>

            



            {/* <disableSelectionOnClick 
            className="userListDelete"
             onClick={() => handleDisable(params.row.id)}
          /> */}

          </>
        );
      },
    },
  ];

  return (
    <>
    <div className="userList">
      <div className="userTitleContainer">
        <h1 className="userTitleeee">Customers</h1>
        <Link to="/addCustomer">
          <button className="userAddButtonnnn">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={customerList}
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
    </>
  );
}
