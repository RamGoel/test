import "./DriverList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteDriver, getDrivers } from "../DriverService";
import DeleteConfirmDialog from "../../../components/DeleteConfirmDialog";
   
    
export default function DriverList() {
  const [openState, setopenState] = useState(false);
  const [driverList, setDriverList] = useState([]);
  const [driverId, setDriverId] = useState("");

  useEffect(async () => {
    const res = await getDrivers();
    setDriverList(res.data);

    console.log("resp", res);
  }, []);

  const handleDeleteDialog = async (id) => {
    setopenState(true);
    setDriverId(id);
  };

  const handleDelete = async () => {
    setopenState(false);
    setDriverList(driverList.filter((item) => item.id !== driverId));
    const res = await deleteDriver(driverId);
    console.log("res", res);
  };

  // const handleDelete = async () => {
  //   setopenState(false);
  //   const newproducts = products.filter((product) => {
  //     return product._id != producttoDelete;
  //   });

  //   setproducts(newproducts);
  //   console.log(newproducts);

  //   const res = await deleteProducts(producttoDelete);
  //   console.log("res", res);
  // };

  // dr_name
  //   dr_join
  //   dr_mobile
  //   dr_licence
  //   dr_licence_valid
  //   dr_address
  //   dr_available

  const columns = [
    { field: "dr_name", headerName: "Driver Name", headerClassName:'headerClrer', width: 150 },
    
    //   {field: "dr_photo",
    //   headerName: "Image",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="productListItem">
    //          <img className="productListImg" src={params.row.img} alt="" />
    //         {params.row.name}
    //       </div>
    //      );
    //    },
    // },

    {
      field: "dr_join",
      headerName: "Join Date",
      headerClassName:'headerClrer',
      width: 160,
    },

    { field: "dr_mobile", headerName: "Mobile Number",headerClassName:'headerClrer', width: 200 },

    { field: "dr_licence", headerName: "License No",headerClassName:'headerClrer', width: 200 },

    // { field: "dr_licence_valid", headerName: "License Valid Till",headerClassName:'headerClrer', width: 200 },

    // { field: "dr_address", headerName: "Address",headerClassName:'headerClrer', width: 200 },

    { field: "dr_cnic", headerName: "CNIC",headerClassName:'headerClrer', width: 200 },
    // { field: "dr_available", headerName: "Experience",headerClassName:'headerClrer', width: 200 },




    // {
    //   field: "model",
    //   headerName: "Model",
    //   width: 160,
    // },

    // {
    //   field: "type",
    //   headerName: "Type",
    //   width: 160,
    // },

    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    
    {
      field: "action",
      headerName: "Action",
      headerClassName:'headerClrer',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/driver/" + params.row.id}>
              <button className="driverListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="driverListDelete"
              onClick={() => handleDeleteDialog(params.row.id)}
            />

<Link to={"/detailDriver/" + params.row.id}>
              <button className="driverListEdit">Detail</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="driverList">
      <div className="driverTitleContainer">
        <h1 className="driverTitle">Drivers</h1>
        <Link to="/addDriver">
          <button className="driverAddButton">Create</button>
        </Link>
      </div>
      
      <DataGrid
        rows={driverList}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
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

