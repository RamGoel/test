import axios from "axios";

export default axios.create({
  baseURL: "https://alqaimrentcars.com/backend/api",
  headers: {
    "Content-type": "application/json"
  }
});

export const vehicleURL = "https://alqaimrentcars.com/backend/uploads/vehicles";
