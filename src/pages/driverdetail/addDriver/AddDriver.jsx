import "./AddDriver.css";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
// import { saveProducts } from "../../services/productService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { saveDriver } from "../DriverService";

export default function AddDriver() {
 let history = useHistory();
 const Item = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: "center",
   color: theme.palette.text.secondary,
 }));
 const [nwDriver, setnwDriver] = useState({
  
    dr_name: "",
    dr_join: "",
    dr_mobile: "",
    dr_licence: "",
    dr_licence_valid: "",
    dr_address: "",
    dr_available: "",
 });

 const onChangeState = (e) => {
   const { name, value } = e.target;
   setnwDriver((prevDriver) => {
     return {
       ...prevDriver,
       [name]: value,
     };
   });
   console.log("state", nwDriver);
 };

 const handleSaveDriver = async (e) => {
   e.preventDefault();
   console.log("Function is called");
   const { data } = await saveDriver(nwDriver);
   console.log("res", data);
   history.push("drivers/");
 };

  return (
    <div className="newDriver">
      <h1 className="addDriverTitlel">Add Driver</h1>
      <form className="addDriverForm" onSubmit={handleSaveDriver}>
         {/* <div className="addProductItem">

          <label>Image</label>
          <input type="file" id="file" value={nwDriver.dr_photo}
           name="dr_photo"
           onChange={(e) => onChangeState(e)}  />
        </div> */}

        <div className="addDriverItem">
          <label>Driver Name<span className="aler">*</span></label>
          <input  value={nwDriver.dr_name}
           name="dr_name"
           pattern="[A-Za-z]{5,50}"
           onChange={(e) => onChangeState(e)} type="text" placeholder="" required/>
        </div>

        <div className="addDriverItem">
          <label>Join Date</label>
          <input value={nwDriver.dr_join}
           name="dr_join"
           onChange={(e) => onChangeState(e)} type="Date" placeholder="" required/>
        </div>

        <div className="addDriverItem">
          <label>Mobile Number</label>
          <input  value={nwDriver.dr_mobile}
           name="dr_mobile"
           pattern="[0-9]{4}-[0-9]{7}"
           onChange={(e) => onChangeState(e)} type="tel" placeholder="" required />
        </div>

        <div className="addDriverItem">
          <label>License Number<span className="aler">*</span></label>
          <input  value={nwDriver.dr_licence}
           name="dr_licence"
           pattern="[A-Za-z]{2}-[0-9]{2}-[0-9]{4}"
           onChange={(e) => onChangeState(e)} type="tel" placeholder="" required/>
           <span className="aler">*No Duplicate Entry Accepted</span>
        </div>

        <div className="addDriverItem">
          <label>License Valid Till</label>
          <input  value={nwDriver.dr_licence_valid}
           name="dr_licence_valid"
           onChange={(e) => onChangeState(e)} type="Date" placeholder="5500" required/>
        </div>

        <div className="addDriverItem">
          <label>CNIC<span className="aler">*</span></label>
          <input  value={nwDriver.dr_cnic}
           name="dr_cnic"
           pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
           onChange={(e) => onChangeState(e)} type="tel" placeholder="" required/>
           <span className="aler">*No Duplicate Entry Accepted</span>

        </div>

        <div className="addDriverItem">
          <label>Address</label>
          <input  value={nwDriver.dr_address}
           name="dr_address"
           onChange={(e) => onChangeState(e)} type="text" placeholder="" required/>
        </div>

        <div className="addDriverItem">
          <label>Experience</label>
          <input  value={nwDriver.dr_available}
           name="dr_available"
           onChange={(e) => onChangeState(e)} type="text" placeholder="" required/>
        </div>
 {/*

        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button type="submit" className="addDriverButtonon">Add</button>
        <button className="addDriverButtonon">Cancel</button>

      </form>
    </div>
  );
}



// import React, { useState } from "react";
// import { Container } from "@material-ui/core";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import { saveProducts } from "../../services/productService";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// function AddProductForm() {
//   let history = useHistory();

//   const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   }));
//   const [newProduct, setnewProduct] = useState({
//     name: "Shoaib",
//     productCategory: "abcde",
//     costPrice: 100,
//     salePrice: 500,
//     countInStock: 50,
//     discount: 100,
//     gst: 30,
//     barCode: "1234335",
//   });

//   const onChangeState = (e) => {
//     // const name = e.target.name;
//     // const value= e.target.value;
//     const { name, value } = e.target;

//     setnewProduct((prevProduct) => {
//       return {
//         ...prevProduct,
//         [name]: value,
//       };
//     });

//     console.log("state", newProduct);
//   };

//   const saveProductData = async () => {
//     console.log("Function is called");
//     // await axios.post("http://abc.com/products")
//     const { data } = await saveProducts(newProduct);
//     console.log("res", data);
//     history.push("/");
//   };
//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <Grid container spacing={1}>
//         <Grid item xs={2}>
//           {" "}
//           <TextField
//             // value={newProduct.name ? newProduct.name : "abc"}
//             value={newProduct.name}
//             name="name"
//             onChange={(e) => onChangeState(e)}
//             required
//             label="Required"
//           />
//         </Grid>
//         <Grid item xs={2}>
//           {" "}
//           <TextField
//             required
//             value={newProduct.productCategory}
//             name="productCategory"
//             onChange={(e) => onChangeState(e)}
//             id="outlined-required"
//             label="Required"
//             defaultValue="Hello World"
//           />
//         </Grid>
//       </Grid>

//       <Grid container spacing={1}>
//         <Grid item xs={2}>
//           {" "}
//           <TextField
//             required
//             value={newProduct.costPrice}
//             name="costPrice"
//             onChange={(e) => onChangeState(e)}
//             id="outlined-required"
//             label="Required"
//             defaultValue="Hello World"
//           />
//         </Grid>
//         <Grid item xs={2}>
//           {" "}
//           <TextField
//             value={newProduct.salePrice}
//             name="salePrice"
//             onChange={(e) => onChangeState(e)}
//             required
//             id="outlined-required"
//             label="Required"
//             defaultValue="Hello World"
//           />
//         </Grid>
//       </Grid>

//       <Grid container spacing={1}>
//         <Grid item xs={2}>
//           <TextField
//             value={newProduct.countInStock}
//             name="countInStock"
//             onChange={(e) => onChangeState(e)}
//             required
//             id="outlined-required"
//             label="Required"
//             defaultValue="Hello World"
//           />
//         </Grid>
//         <Grid item xs={2}>
//           <TextField
//             required
//             value={newProduct.discount}
//             name="discount"
//             onChange={(e) => onChangeState(e)}
//             id="outlined-required"
//             label="Required"
//             defaultValue="Hello World"
//           />
//         </Grid>
//       </Grid>

//       <Grid container spacing={1}>
//         <Grid item xs={2}>
//           <TextField
//             required
//             value={newProduct.gst}
//             name="gst"
//             onChange={(e) => onChangeState(e)}
//             id="outlined-required"
//             label="Required"
//             defaultValue="Hello World"
//           />
//         </Grid>
//         <Grid item xs={2}>
//           <TextField
//             required
//             value={newProduct.barCode}
//             name="barCode"
//             onChange={(e) => onChangeState(e)}
//             id="outlined-required"
//             label="Required"
//             defaultValue="Hello World"
//           />
//         </Grid>
//       </Grid>

//       <Button onClick={saveProductData} variant="contained">
//         Add Product
//       </Button>
//     </Container>
//   );
// }

//
