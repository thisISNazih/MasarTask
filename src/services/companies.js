import axios from "axios"
export const getCompanies =  () => { 
    return new Promise((resolve) => {
      axios.get(`http://23.254.228.118:8080/API/api/TransportationCompany/All`)
      .then(res => {
        resolve(res.data.Data)
      })
    })
   
  }