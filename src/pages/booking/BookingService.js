import http from '../../http-common'

export const getBookings = () => {
    const res = http.get('/allbooking');
    return res;
}

export const getBookingById = (id) => {
    const res = http.get('/bookingby/' + id);
    return res;
}

export const saveBooking = (booking) => {
    console.log("booking", booking)
    const res = http.post('/booking', booking);
    console.log("data", res)
    return res;
}

export const updateBooking = (booking, id) => {
    console.log("booking", booking)
    const res = http.put(`/bookingupdate/${id}`, booking);
    console.log("data", res)
    return res;
}

export const deleteBooking = (id) => {
    console.log(id)
    const res = http.delete(`/bookingdelete/${id}`);
    return res;
}

export const updateStatus = (statusPayload, id) => {
    console.log(id)
    const res = http.put(`/statusupdate/${id}`, statusPayload);
    return res;
}

export const getVehicleBookings = (vehicleId) => {
    const res = http.get(`/getvehhistory/${vehicleId}`);
    return res;
}
