 import "./addCar.css";
 import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { saveVehicle } from "../CarService";
import { vehicleURL } from "../../../http-common";


 export default function AddCar() {
  let history = useHistory();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [carPhoto, setCarPhoto] = useState({});
  const [nwProduct, setnwProduct] = useState({
   

        veh_reg: "",
        veh_type: "",
        chesis_no: "",
        company: "",
        veh_color: "",
        veh_reg_date: "",
        veh_description: "",
        price:"",
        transmission: "",
        milage: "",
        model: "",
        veh_available: "",
        status: ""

  });

  const onChangeState = (e) => {
    // let formData = new FormData();
    const { name, value } = e.target;
    setnwProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
    console.log("state", nwProduct);
  };

  const handleSaveProduct = async (e) => {
    let formData = new FormData();
    formData.append('veh_photo', carPhoto);
    for ( var key in nwProduct ) {
      formData.append(key, nwProduct[key]);
    }
    e.preventDefault();
    console.log("Function is called");
    const { data } = await saveVehicle(formData);
    console.log("res", data);
    history.push("/cars");
  };

   return (
     <div className="newProduct">
       <h1 className="addProductTitlee">Add Car</h1>
       <form className="addProductForm" onSubmit={handleSaveProduct}>

       <div className="addProductItem">
           <label>Vedio<span className="alerts">*</span></label>
           <input type="file" id="file" name="veh_video" 
           src={vehicleURL+"/" + nwProduct.veh_video}
            onChange={(e) => setCarPhoto(e.target.files[0])}  placeholder="" required/>
         </div> 
           <div className="addProductItem">
           <label>Image<span className="alerts">*</span></label>
           <input type="file" id="file" name="veh_photo" 
           src={vehicleURL+"/" + nwProduct.veh_photo}
            onChange={(e) => setCarPhoto(e.target.files[0])}  placeholder="" required/>
         </div>  
         <div className="addProductItem">
           <label>Vehicle Registration<span className="alerts">*</span></label>
           <input  value={nwProduct.veh_reg}
            name="veh_reg"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required/>
            <span className="alerts">*No Duplicate Entry Accepted</span>
         </div>

         <div className="addProductItem">
           <label>Vehicle Type</label>
           <input value={nwProduct.veh_type}
            name="veh_type"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required />
         </div>

         <div className="addProductItem">
           <label>Chesis Number<span className="alerts">*</span></label>
           <input  value={nwProduct.chesis_no}
            name="chesis_no"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" />
            <span className="alerts">*No Duplicate Entry Accepted</span>

         </div>

         <div className="addProductItem">
           <label>Company</label>
           <input  value={nwProduct.company}
            name="company"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required />
         </div>

         <div className="addProductItem">
           <label>Color</label>
           <input  value={nwProduct.veh_color}
            name="veh_color"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" />
         </div>

         <div className="addProductItem">
           <label>Registration Date</label>
           <input  value={nwProduct.veh_reg_date}
            name="veh_reg_date"
            onChange={(e) => onChangeState(e)} type="Date" placeholder="" />
         </div>

         <div  className="addProductItem">
           <label>Rent/Day</label>
           <input  value={nwProduct.price}
            name="price"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required />
         </div>

        <div  className="addProductItem">
           <label>Transmission</label>
           <input  value={nwProduct.transmission}
            name="transmission"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required/>
         </div>

         <div  className="addProductItem">
           <label>Milage</label>
           <input  value={nwProduct.milage}
            name="milage"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required/>
         </div>

      

         <div  className="addProductItem">
           <label>Model</label>
           <input  value={nwProduct.model}
            name="model"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required/>
         </div>



         <div className="addProductItem">
           <label>Discription</label>
           <input  value={nwProduct.veh_description}
            name="veh_description"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required />
         </div>

         <div className="addProductItem">
           <label>Availbility</label>
           <input  value={nwProduct.veh_available}
            name="veh_available"
            onChange={(e) => onChangeState(e)} type="text" placeholder="" required/>
         </div>

         <div className="addProductItem">
           <label>Status</label>
           <select className="newBookingSelect" value={nwProduct.status} name="status" id="active" onChange={(e) => onChangeState(e)} > 
            <option value="0">In</option>
            <option value="1">Out</option>
          </select>
         </div>

        

         

         {/* <div className="addProductItem">
           <label>Rent/Day</label>
           <input  value={nwProduct.rentperday}
            name="rentperday"
            onChange={(e) => onChangeState(e)} type="text" placeholder="5500" />
         </div>


         <div className="addProductItem">
           <label>Active</label>
           <select name="active" id="active">
             <option value="yes">Yes</option>
             <option value="no">No</option>
           </select>
         </div> */}
         <button type="submit" className="addProductButtonnn">Add</button>
         <button className="addProductButtonnn">Cancel</button>

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
