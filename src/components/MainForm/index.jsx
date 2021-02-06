import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './styles.scss';
import { Field, reduxForm } from 'redux-form'
import { getCompanyData, addCompany } from "../../services/companies";

let MainForm = (props) => {
     const { id } = props.match.params;
     const dispatch = useDispatch();
     useEffect(async () => { 
          if(id){
          const data = await getCompanyData(id);
          dispatch({ type: "Set_SelectedCompany", company: data }) 
          }
     }, []);

     const companyData = useSelector(state => state.mainReducer.selectedCompany)
    async function handleSubmit() {  
          const companyData = {
           ///
          }
          const data = await addCompany(companyData);
          dispatch({ type: "Add_Company", company: data }) 
          
     }
     return (
          <div className="form-wrapper container">
               <form class="form-inline"> 
                    <div class="form-field">
                    <label for="inlineFormInputName2">Company ID</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" value={id} />
                    </div>  
                    <div class="form-field">
                    <label for="inlineFormInputGroupUsername2">Company Address</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="Username" value={companyData.Address} /> 
                    </div>
                    <div class="form-field">
                    <label for="inlineFormInputGroupUsername2">Company Telephone Num.</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="Username" value={companyData.TelephoneNumber} /> 
                    </div>
                    <div class="form-field">
                    <label for="inlineFormInputGroupUsername2">Contact Person Name</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="Username" value={companyData.ContactPerson_Name} />
                    </div>
                    <div class="form-field">
                    <label for="inlineFormInputGroupUsername2">Company Person Telephon Num.</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="Username" value={companyData.ContactPerson_TelephoneNumber} /> 
                    </div>
                    <div class="form-field">
                    <label for="inlineFormInputGroupUsername2">Company Person Email</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="Username" value={companyData.ContactPerson_Email} />
                    </div> 
               </form > 
               <button type="submit" onClick={()=>handleSubmit()}className="btn addBtn">Save</button>
          </div >)
}

MainForm = reduxForm({
     form: 'editCompany'
})(MainForm)
export default MainForm;