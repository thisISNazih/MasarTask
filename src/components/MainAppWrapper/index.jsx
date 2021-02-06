import React, { useEffect } from "react";
import ActionButton from "../ActionButton/ActionButton"; 
import {Link} from 'react-router-dom';
import {getCompanies} from "../../services/companies"; 
import CompaniesListing from "../ItemsListing"
import {useDispatch} from "react-redux"
import "./styles.scss";
const TransportationApp = () => { 
  const dispatch = useDispatch();  
   useEffect(async () => {
     var data = await getCompanies(); 
     dispatch({type:"Add_Companies", action_data: data})
  },[])

    return (
      <div className="app-wrapper">
        <div className="container">
          <div className="button-placeholder">
           <Link className="btn addBtn" to={"/form"}>Add Transportation</Link>
          </div> 
          <CompaniesListing/>
        </div>
      </div>
    );
  
}
export default TransportationApp;