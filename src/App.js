import React from 'react';
import "./components/index.css"
import { useState } from 'react';
import List from './components/List';

const App = () => {
  const [currentItem, setCurrentItem]= useState();
  const [itemList, setItemList]= useState([]);

  const onchangeHandle = e => {
    setCurrentItem(e.target.value);
  }

  const AddItemList =() =>{
     setItemList([...itemList, {item:currentItem, key: Date.now()}]);
     setCurrentItem("")
  }
  return (
    <div className='App'>
     <header className='App-header'>
      <div className="Wrapper">
        <div className="input-wrapper">
          <input type="text" placeholder='Add task' value={currentItem} onChange={onchangeHandle} />
          <button className='btn' onClick={AddItemList}>+</button>
        </div>
        <List itemList={itemList}  setItemList={setItemList}/>
      </div>
     </header>
    </div>
  );
};


export default App;
