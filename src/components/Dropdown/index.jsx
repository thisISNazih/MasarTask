import React from 'react'

const SelectList = ({options}) => {   
    return (    
        <select class="form-control" id="sel1"> 
          {options.map((item,i)=>{
              return ( <option value={item.Value} key={item.Value} >{item.Value}</option>)
          })}
        </select>
    )

} 

export default SelectList;