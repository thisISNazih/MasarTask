import React, { useEffect } from "react";
import ActionButton from "../ActionButton/ActionButton";
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
        <header className="app-header">
          <p>Transportation</p>
        </header>
        <div className="container">
          <div className="button-placeholder">
            <ActionButton text={"Add Transportation"} />
          </div> 
          <CompaniesListing/>
        </div>
      </div>
    );
  
}
export default TransportationApp;