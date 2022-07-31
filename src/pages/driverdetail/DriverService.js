import http from '../../http-common'

export const getDrivers = () => {
    const res = http.get('/getdriverdata')
    return res
}

export const getDriverById = (id) => {
    const res = http.get('/driverdataget/' + id);
    return res;
}


export const saveDriver = (driver) => {
    console.log("driver", driver)
    const res = http.post('/driver', driver)
    console.log("data", res)
    return res
}

export const updateDriver = (driver, id) => {
    console.log("driver", driver)
    const res = http.put(`/driverupdate/${id}`, driver)
    console.log("data", res)
    return res
}

export const deleteDriver = (id) => {
    console.log(id)
    const res = http.delete(`/driverdelete/${id}`);
    return res;
}

