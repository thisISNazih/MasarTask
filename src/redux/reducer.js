const initialState = {
    companies: []
};
function mainReducer(state = initialState,action){ 
  switch (action.type) {
      case "Add_Companies": {
          return {
             ...state, companies:action.action_data
          }
      }
  }
   
  return state;

} 
export default mainReducer;