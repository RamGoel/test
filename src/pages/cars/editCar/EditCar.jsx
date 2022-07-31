import { Link } from "react-router-dom";
import "./editCar.css";
import Chart from "../../../components/chart/Chart"
import {productData} from "../../../dummyData"
import { Publish } from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
// import { editDriver } from "../../driverdetail/DriverService";
import { getVehicleById, updateVehicle } from "../../cars/CarService";

export default function EditCar() {


    let history = useHistory();
    const { carId  } = useParams();
    const [editvehicle, setEditVehicle] = useState();
  
    useEffect(async () => {
      const res = await getVehicleById(carId);
      console.log("res get by id", res.data);
      setEditVehicle(res.data);
  
    }, []);
  
    const onChangeState = (e) => {
      const { name, value } = e.target;
      setEditVehicle((prevVehicle) => {
        return {
          ...prevVehicle,
          [name]: value,
        };
      });
      console.log("state", editvehicle);
    };
  
    const handleEditVehicle = async (e) => {
      e.preventDefault();
      console.log("Function is called");
      const { data } = await updateVehicle(editvehicle, carId);
      console.log("res edit", data);
      history.push("/cars");
    }
  return (
    <div className="productt">
      <div className="productTitleContainerr">
        <h1 className="productTitlee">Edit Car</h1>
        {/* <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link> */}
      </div>
      {/* <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <span className="productName">Suzuki Swift</span>
              </div>
             
                <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                 <div className="productInfoItem">
                      <span className="productInfoKey">Available:</span>
                      <span className="productInfoValue">no</span>
                  </div> 
              </div> 

          </div>
      </div> */}


      <div className="productBottomm">
          <form className="productFormm" onSubmit={handleEditVehicle}>
              <div className="productFormLeftt">
                  <label>Registration Number</label>
                  <input  type="text"
                  name="veh_reg"
                  placeholder=""
                  className="productUpdateInput"
                  value={editvehicle?.veh_reg}
                  onChange={(e) => onChangeState(e)}  />
                
              </div>

              <div className="productFormLeftt">
                  <label>Vehicle Type</label>
                  <input  type="text"
                  name="veh_type"
                  placeholder=""
                  className="productUpdateInput"
                  value={editvehicle?.veh_type}
                  onChange={(e) => onChangeState(e)}  />
                
              </div>

              <div className="productFormLeftt">
                  <label>Chesis Number</label>
                  <input  type="text"
                  name="chesis_no"
                  placeholder=""
                  className="productUpdateInput"
                  value={editvehicle?.chesis_no}
                  onChange={(e) => onChangeState(e)}  />
                
              </div>

              <div className="productFormLeftt">
                  <label>Company</label>
                  <input  type="text"
                  name="company"
                  placeholder=""
                  className="productUpdateInput"
                  value={editvehicle?.company}
                  onChange={(e) => onChangeState(e)}  />
                
              </div>

              <div className="productFormLeftt">
                  <label>Colour</label>
                  <input  type="text"
                  name="veh_color"
                  placeholder=""
                  className="productUpdateInput"
                  value={editvehicle?.veh_color}
                  onChange={(e) => onChangeState(e)}  />
                
              </div>

              <div className="productFormLeftt">
                  <label>Registration Date</label>
                  <input  type="Date"
                  name="veh_reg_date"
                  placeholder=""
                  className="productUpdateInput"
                  value={editvehicle?.veh_reg_date}
                  onChange={(e) => onChangeState(e)}  />
                
              </div>

              <div className="productFormLeftt">
                  <label>Availbility</label>
                  <input  type="text"
                  name="veh_available"
                  placeholder=""
                  className="productUpdateInput"
                  value={editvehicle?.veh_available}
                  onChange={(e) => onChangeState(e)}  />
                
              </div>

              <div className="productFormLeftt">
              <label>Status</label>
                <select className="productUpdateInput" value={editvehicle?.status} name="status" id="active" onChange={(e) => onChangeState(e)} > 
                  <option value="0">In</option>
                  <option value="1">Out</option>
                </select>
              </div>

              <div className="productFormLeftt">
                  <label>Vehicle Disription</label>
                  <input  type="textarea"
                  name="veh_description"
                  placeholder=""
                  className="productUpdateInput"
                  value={editvehicle?.veh_description}
                  onChange={(e) => onChangeState(e)}  />
                
              </div>

              <div className="productFormRightt">
                   {/* <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input  value={editvehicle?.veh_photo} type="file" id="file" style={{display:"none"}} />
                  </div>  */}
                  <button type="submit" className="productButtonn">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
