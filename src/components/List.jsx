import React from 'react';
import '../index.css'; 

const List = ({data, deleteHandler}) => {
       
    return (
        <ul className="list-wrapper">
            {data.map((item,i) => {
                return <li className="list-item" key={i}>{item.text} <span onClick={()=>deleteHandler(i)} aria-hidden="true">&times;</span> </li>
            })}
        </ul>
    )

} 
export default List;