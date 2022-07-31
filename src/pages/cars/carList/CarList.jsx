import "./carList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteVehicle, getVehicles } from "../CarService";
import DeleteConfirmDialog from "../../../components/DeleteConfirmDialog";
   
    
export default function CarList() {
  const [openState, setopenState] = useState(false);
  const [carList, setCarList] = useState([]);
  const [productId, setProductId] = useState("");

  useEffect(async () => {
    const res = await getVehicles();
    setCarList(res.data);

    console.log("resp", res);
  }, []);

  const handleDeleteDialog = async (id) => {
    setopenState(true);
    setProductId(id);
  };

  const handleDelete = async () => {
    setopenState(false);
    setCarList(carList.filter((item) => item.id !== productId));
    const res = await deleteVehicle(productId);
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

  
       

  const columns = [
    { field: "veh_reg", headerName: "Vehicle Registration", headerClassName:'headerClrrr', width: 150 },


      // {
      //     field: "veh_photo",
      //     headerName: "Image",
      //     headerClassName:'headerClr',
      //     width: 300,
      // },
    

    {
      field: "veh_type",
      headerName: "Vehicle Type",
      headerClassName:'headerClrrr',
      width: 160,
    },

    { field: "chesis_no", headerName: "Chesis Number",headerClassName:'headerClrrr', width: 200 },

    { field: "company", headerName: "Company",headerClassName:'headerClrrr', width: 200 },

    { field: "veh_color", headerName: "Color",headerClassName:'headerClrrr', width: 200 },

    // { field: "veh_reg_date", headerName: "Registration",headerClassName:'headerClrrr', width: 200 },

    // { field: "veh_description", headerName: "Discription",headerClassName:'headerClrrr', width: 200 },

    // { field: "veh_available", headerName: "Availbility",headerClassName:'headerClrrr', width: 200 },



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
      headerClassName:'headerClrrr',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/car/" + params.row.uuid}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDeleteDialog(params.row.id)}
            />
              <Link to={"/carDetail/" + params.row.uuid}>
              <button className="productListEdit">Detail</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainerer">
        <h1 className="productTitlele">Vehicles</h1>
        <Link to="/addCar">
          <button className="productAddButtonon">Create</button>
        </Link>
      </div>
      
      <DataGrid
        rows={carList}
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

