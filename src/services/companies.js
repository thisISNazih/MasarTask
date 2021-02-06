import axios from "axios"
export const getCompanies =  () => { 
    return new Promise((resolve) => {
      axios.get(`http://23.254.228.118:8080/API/api/TransportationCompany/All`)
      .then(res => {
        resolve(res.data.Data)
      })
    })
   
  }

  export const getCompanyData =  (id) => { 
    return new Promise((resolve) => {
      axios.get(`http://23.254.228.118:8080/API/api/TransportationCompany/GetById?id=${id}`)
      .then(res => {
        resolve(res.data.Data)
      })
    })
   
  } 

  export const addCompany =  (companyData) => {  
    return axios({
      method: 'post',
      url: 'http://23.254.228.118:8080/API/api/TransportationCompany/Add',
      data: companyData
    });   
  }

  export const editCompanyData =  (companyData) => { 
    return new Promise((resolve) => {
      axios.put(`http://23.254.228.118:8080/API/api/TransportationCompany/Update`)
      .then(res => {
        resolve(res.data.Data)
      })
    })
   
  }

  export const getCountries =  () => { 
    return new Promise((resolve) => {
      axios.get(`http://23.254.228.118:8080/API/api/Lookup/GetCountries`)
      .then(res => {
        resolve(res.data.Data)
      })
    })
   
  }

  
  export const getCities =  (id) => { 
    return new Promise((resolve) => {
      axios.get(`http://23.254.228.118:8080/API/api/Lookup/GetCities?countryId=${id}`)
      .then(res => {
        resolve(res.data.Data)
      })
    })
   
  }


  export const getVehicleTypes =  () => { 
    return new Promise((resolve) => {
      axios.get(`http://23.254.228.118:8080/API/api/Lookup/GetVehicleType`)
      .then(res => {
        resolve(res.data.Data)
      })
    })
   
  }