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
    return new Promise((resolve) => {
      axios.post(`http://23.254.228.118:8080/API/api/TransportationCompany/Add`)
      .then(res => {
        resolve(res.data.Data)
      })
    })
   
  }