import {useState, useEffect} from 'react';
import List from "./components/List"; 
import InputField from "./components/InputField"; 
import ActionButton from "./components/ActionButton";
import './App.css'; 

function App() { 
  const [currentData, setCurrentData] =  useState([])
  const [inputText, setInputText] = useState("Type here .. ");  

  const onChangeHandler = (e) => {
     setInputText(e.target.value)
  }  

  const addItemToList = () => { 
       var obj = {
        id: Math.floor(Math.random() * 10),
        text: inputText
       }
        setCurrentData([...currentData, obj])
  }
  const deleteItem = (index) => {
        setCurrentData(currentData.splice(index,1))
  }
  return (
    <div className="App container"> 
      <InputField onChangeHandler={onChangeHandler}/>
      <List data={currentData} deleteHandler={deleteItem}/>  
      <ActionButton clickHandler={addItemToList} />
    </div>
  );
}

export default App;
