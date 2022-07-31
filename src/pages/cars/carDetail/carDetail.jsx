import "./cardetail.css";
// import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState, useEffect } from "react";
import { getVehicleBookings} from "../../booking/BookingService";
import { getVehicleById } from "../CarService";
import { getDrivers} from "../../driverdetail/DriverService";
import { vehicleURL } from "../../../http-common";
import { useParams } from "react-router-dom";
  
  
 export default function CarDetail() {

  const { carId } = useParams();
  const [bookingdetail, setbookingdetail] = useState([]);
  const [vehicledetail,  setvehicledetail] = useState({});
  const [driverdetail, setdriverdetail] = useState([]);

//   let history = useHistory();
  const Item = styled(Paper)(({ theme }) => ({
     ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


useEffect(async () => {
    const res = await getVehicleBookings(carId);
    setbookingdetail(res.data);
    console.log("resp", res);
  }, []);

  useEffect(async () => {
    const res = await getVehicleById(carId);
    console.log("res get by id", res.data);
    setvehicledetail(res.data);
  }, []);



  useEffect(async () => {
   

    const res = await getDrivers();
    setdriverdetail(res.data);

    console.log("resp", res);
  }, []);


 
  

  return (
    <Container fluid >
{/* /userupdatestatus/{id} */}
<div >
      {/* <Accordion className="accor1" variant="danger">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" style={{color:"white"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="header1">CUSTOMER DETAIL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
          <TableCell className="head" align="left">#</TableCell>
            <TableCell className="head" align="left">First Name</TableCell>
            <TableCell className="head" align="left">Last Name</TableCell>
            <TableCell className="head" align="left">Email</TableCell>
            <TableCell className="head" align="left">Dob</TableCell>
            <TableCell className="head" align="left">Gender</TableCell>
            <TableCell className="head" align="left">Contact Number</TableCell>
            <TableCell className="head" align="left">CNIC</TableCell>
            <TableCell className="head" align="left">Status</TableCell>




          </TableRow>
        </TableHead>
        <TableBody>
       { customerdetail.map((customerdetail, index) => (
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="left">{index+1}</TableCell>
              <TableCell align="left">{customerdetail.first_name}</TableCell>
              <TableCell align="left">{customerdetail.last_name}</TableCell>
              <TableCell align="left">{customerdetail.email}</TableCell>
              <TableCell align="left">{customerdetail.Dob}</TableCell>
              <TableCell align="left">{customerdetail.gender}</TableCell>
              <TableCell align="left">{customerdetail.contact_no}</TableCell>
              <TableCell align="left">{customerdetail.cnic}</TableCell>
              <TableCell align="left">{customerdetail.status }</TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      <Accordion className="accor1" variant="danger">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" style={{color:"white"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="header1">VEHICLE DETAIL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow >
          <TableCell className="head" align="left">Photo</TableCell>
            <TableCell className="head" align="left">Vehicle Reg</TableCell>
            <TableCell className="head" align="left">Vehicle Type</TableCell>
            <TableCell className="head" align="left">Chesis No</TableCell>
            <TableCell className="head" align="left">Company</TableCell>
            <TableCell className="head" align="left">Color</TableCell>
            <TableCell className="head" align="left">Rent/Day</TableCell>
            <TableCell className="head" align="left">Transmission</TableCell>
            <TableCell className="head" align="left">Milage</TableCell>
            <TableCell className="head" align="left">Model</TableCell>
            <TableCell className="head" align="left">Availbility</TableCell>




          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left"><img src={vehicleURL+"/" + vehicledetail.veh_photo} width={220} height={220}></img></TableCell>
              <TableCell align="left" className="bv">{vehicledetail.veh_reg}</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.veh_type}</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.chesis_no}</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.company}</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.veh_color}</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.price}</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.transmission }</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.milage}</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.model}</TableCell>
              <TableCell align="left" className="bv">{vehicledetail.veh_available}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accor1" variant="danger">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" style={{color:"white"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="header1">VEHICLE BOOKING HISTOR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell className="head" align="left">#</TableCell>
            <TableCell className="head" align="left">Renter Name</TableCell>
            {/* <TableCell align="left">Father Name</TableCell> */}
            {/* <TableCell className="head" align="left">Address</TableCell> */}
            <TableCell className="head" align="left">Car Name</TableCell>
            <TableCell className="head" align="left">CNIC</TableCell>
            <TableCell className="head" align="left">Date Out</TableCell>
            <TableCell className="head" align="left">Date In</TableCell>
            <TableCell className="head"  align="left">Email</TableCell>
            <TableCell className="head"  align="left">Service</TableCell>
            <TableCell className="head" align="left">Gender</TableCell>




          </TableRow>
        </TableHead>
        <TableBody>
        { bookingdetail.map((bookingdetail, index) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{index+1}</TableCell>
              <TableCell align="left">{bookingdetail.name}</TableCell>
              {/* <TableCell align="left">{bookingdetail.address}</TableCell> */}
              <TableCell align="left">{bookingdetail.car_name}</TableCell>
              <TableCell align="left">{bookingdetail.cnic}</TableCell>
              <TableCell align="left">{bookingdetail.date_in}</TableCell>
              <TableCell align="left">{bookingdetail.date_out}</TableCell>
              <TableCell align="left">{bookingdetail.email}</TableCell>
              <TableCell align="left">{bookingdetail.service }</TableCell>
              <TableCell align="left">{bookingdetail.gender}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accor1" variant="danger">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon fontSize="large" style={{color:"white"}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="header1">VEHICLE STATIC</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell className="head" align="left">#</TableCell>
            <TableCell className="head" align="left">VEHICLE REG</TableCell>
            <TableCell className="head" align="left">DEVICE NAME</TableCell>
            <TableCell className="head" align="left">OIL LEVEL</TableCell>
            <TableCell className="head" align="left">BATTERY VOLTAGE</TableCell>
           

          </TableRow>
        </TableHead>
        <TableBody>
          {driverdetail.map((driverdetail, index) => (
            <TableRow
              key={driverdetail.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell align="left">{index+1}</TableCell>
              <TableCell align="left">{driverdetail.dr_name}</TableCell>
              <TableCell align="left">{driverdetail.dr_join}</TableCell>
              <TableCell align="left">{driverdetail.dr_mobile}</TableCell>
              <TableCell align="left">{driverdetail.dr_licence}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>

{/* <Card className="card1">
  <Card.Header className="header1">CUSTOMER DETAIL</Card.Header>
  <Card.Body>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Renter Name</TableCell>
            <TableCell align="right">Father Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Car Name</TableCell>
            <TableCell align="right">CNIC</TableCell>
            <TableCell align="right">Date Out</TableCell>
            <TableCell align="right">Date In</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone </TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Status</TableCell>




          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card.Body>
</Card>

<Card className="card1">
  <Card.Header className="header1">VEHICLE DETAIL</Card.Header>
  <Card.Body>

  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </Card.Body>
</Card>

<Card className="card1">
  <Card.Header className="header1">BOOKING DETAIL</Card.Header>
  <Card.Body>

  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </Card.Body>
</Card>

<Card className="card1">
  <Card.Header className="header1">DRIVER DETAIL</Card.Header>
  <Card.Body>

  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </Card.Body>
</Card> */}
    
  </Container>
  );
      
  } 
