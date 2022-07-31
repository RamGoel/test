import http from '../../http-common'

export const getCustomers = () => {
    const res = http.get('/alluser')
    return res;
}

export const getCustomerById = (customerId) => {
    const res = http.get('/user/'+ customerId);
    return res;
}

export const saveCustomer = (customer) => {
    console.log("user", customer)
    const res = http.post('/user', customer);
    console.log("data", res)
    return res;
}

export const updateCustomer = (customer, id) => {
    console.log("user", customer)
    const res = http.put(`/userupdate/${id}`, customer);
    console.log("data", res)
    return res;
}

export const deleteCustomer = (id) => {
    console.log(id)
    const res = http.delete(`/userdelete/${id}`);
    return res;
}
