import React, {createContext, useContext, useEffect, useState} from 'react';
import {items} from "../data";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [itemsLeft, setItemsLeft] = useState([]);
  const [itemsRight, setItemsRight] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  
  const handleSelect = (item, operation) => {
    if (operation === 'add') {
      setSelectedItem([...selectedItem, item]);
    } else {
      setSelectedItem(selectedItem.filter(i => i !== item));
    }
  }
  
  const moveItemsToRight = () => {
    setItemsRight([...new Set([...itemsRight, ...selectedItem])].sort());
    setItemsLeft(itemsLeft.filter(i => !selectedItem.includes(i)));
    setSelectedItem([]);
  }
  
  const moveItemsToLeft = () => {
    setItemsLeft([...new Set([...itemsLeft, ...selectedItem])].sort());
    setItemsRight(itemsRight.filter(i => !selectedItem.includes(i)));
    setSelectedItem([]);
  }
  
  useEffect(() => {
    setItemsLeft(items);
    setItemsRight([]);
  }, []);
  
  return (
    <DataContext.Provider value={
      {
        itemsLeft, setItemsLeft,
        itemsRight, setItemsRight,
        selectedItem, setSelectedItem,
        handleSelect, moveItemsToRight,
        moveItemsToLeft
      }
    }>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);