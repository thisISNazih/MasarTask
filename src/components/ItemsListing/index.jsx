import React from "react";
import "./styles.scss";
import {useSelector} from "react-redux" 
import ActionButton from '../ActionButton/ActionButton';
import {Link} from 'react-router-dom';
const CompaniesListing = () => { 
  const transCompanies = useSelector((state) => state.mainReducer.companies); 
  return(<div className="listing-wrapper">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Company ID #</th>
          <th scope="col">Company Name</th>
          <th scope="col">Total Fleet</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
       {transCompanies.map((item,i)=>{
         return (
          <tr key={i}>
            <td>{item.ID}</td>
            <td>{item.Name}</td>
            <td>{item.TotalFleet}</td>
            {item.CanEdit?<td><Link to={`/form/${item.ID}`}>Edit</Link> </td> : <td>not editable</td> }

          </tr>
         )
       })} 
      </tbody>
    </table>
  </div> 
  )
};

export default CompaniesListing;
