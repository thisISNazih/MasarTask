import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import './styles.scss';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import InputField from "../InputField/index";
import SelectList from "../Dropdown/index";
import { getCompanyData, addCompany, getVehicleTypes } from "../../services/companies";

const renderInput = (props) => <input type="text" {...props.input} class="form-control mb-2 mr-sm-2" />

const onSubmit = async (values) => {
     //var response = await addCompany(values); 
     console.log(values);
}
const MainForm = ({ handleSubmit, match }) => {
     const { id } = match.params;
     const dispatch = useDispatch();
     const [vehichleTypes, setVehicleTypes] = useState([]);

     useEffect(async () => {
          // if (id) {
               // const data = await getCompanyData(id);
               // dispatch({ type: "Set_SelectedCompany", company: data })

               const vehicleTypesData = await getVehicleTypes(); 
               console.log("veh", vehicleTypesData);
               setVehicleTypes(vehicleTypesData);
          //}
     }, []);
     return (
          <div className="form-wrapper container">
               <form onSubmit={handleSubmit} class="form-inline">
                    <div className="form-section">
                         <h5>Company Data</h5>
                         <div class="form-field">
                              <label for="inlineFormInputName2">Company ID</label>
                              <Field name="name" component={renderInput} />
                         </div>
                         <div class="form-field">
                              <label for="inlineFormInputGroupUsername2">Company Address</label>
                              <Field name="adress" component={renderInput} />
                         </div>
                         <div class="form-field">
                              <label for="inlineFormInputGroupUsername2">Company Telephone Num.</label>
                              <Field name="TelephoneNumber" component={renderInput} />
                         </div>
                         <div class="form-field">
                              <label for="inlineFormInputGroupUsername2">Contact Person Name</label>
                              <Field name="ContactPerson_Name" component={renderInput} />
                         </div>
                         <div class="form-field">
                              <label for="inlineFormInputGroupUsername2">Company Person Telephon Num.</label>
                              <Field name="ContactPerson_TelephoneNumber" component={renderInput} />
                         </div>
                         <div class="form-field">
                              <label for="inlineFormInputGroupUsername2">Company Person Email</label>
                              <Field name="ContactPerson_Email" component={renderInput} />
                         </div>
                    </div>

                    <div className="form-section">
                         <h5>Bus Data</h5>
                         <div class="form-field">
                              <label for="inlineFormInputGroupUsername2">Vechicle Type</label>
                              <Field name="TransportationCompanyBuses" component={() => <SelectList options={vehichleTypes} />}><option></option></Field>
                         </div>
                    </div>
                    <button type="submit" className="btn addBtn">Save</button>
               </form >

          </div>)
}

export default reduxForm({
     form: 'editCompany',
     onSubmit
})(MainForm)
// MainForm = reduxForm((MainForm)
// export default MainForm;