import http from '../../http-common'

export const getVehicles = () => {
    const res = http.get('/show')
    return res
}

export const getVehicleById = (vehicleId) => {
    const res = http.get('/show/'+ vehicleId);
    return res;
}

export const saveVehicle = (vehicle) => {
    console.log("vehicle", vehicle)
    const res = http.post('/vehicle', vehicle)
    console.log("data", res)
    return res
}

export const updateVehicle = (vehicle, id) => {
    console.log("vehicle", vehicle)
    const res = http.put(`/vehicleupdate/${id}`, vehicle)
    console.log("data", res)
    return res
}

export const deleteVehicle = (id) => {
    console.log(id)
    const res = http.delete(`/vehicledelete/${id}`);
    return res;
}
