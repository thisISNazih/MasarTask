const initialState = {
    companies: [], 
    selectedCompany: {}
};
function mainReducer(state = initialState,action){ 
  switch (action.type) {
      case "Add_Companies": {
          return {
             ...state, companies:action.action_data
          }
      } 
      case "Set_SelectedCompany": {
        return {
           ...state, selectedCompany:action.company
        }
    } 
    case "Add_Company": {
        return {
           ...state, companies:[...state.companies, action.data]
        }
    }
  }
   
  return state;

} 
export default mainReducer;