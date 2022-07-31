import http from '../../http-common'

export const getCustomerCount = () => {
    const res = http.get('/usercount');
    return res;
}

export const getBookingCount = () => {
    const res = http.get('/bookingcount');
    return res;
}

export const getDriverCount = () => {
    const res = http.get('/drivercount');
    return res;
}

export const getVehicleCount = () => {
    const res = http.get('/vehiclecount');
    return res;
}

export const getVehicleOnTour = () => {
    const res = http.get('/vehicleontour');
    return res;
}

export const getRevenue = () => {
    const res = http.get('/allprice');
    return res;
}
