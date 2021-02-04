import React from 'react';
import "./styles.scss";
const ActionButton = ({clickHandler, text}) => {
      return (
          <button className="btn addBtn" onClick={()=>clickHandler()}>{text}</button>
      )
}  
export default ActionButton;