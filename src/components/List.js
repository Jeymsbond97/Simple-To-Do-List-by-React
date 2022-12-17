import React from 'react'
import "./list.css"

const List = (props) => {

    const deleteList = (key)=>{
        const newList = props.itemList.filter(itemAll=>{
            return itemAll.key !== key;
        });
        props.setItemList(newList);
    };

    return (
        <div>
           {props.itemList.map(itemAll =>{
            return (
              <div key={itemAll.key} className='item'>
                 <p>{itemAll.item}</p>
                 <button className='item-btn' onClick={()=> deleteList(itemAll.key)}>X</button>
              </div>
            )
           })} 
        </div>
    )
}

export default List