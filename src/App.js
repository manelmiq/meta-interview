import "./styles.css";
import Box from "./components/Box";
import ControlButtons from "./components/ControlButtons";
import {items} from "./data";
import {useEffect, useState} from "react";
import {useDataContext} from "./context/DataContext";


export default function App() {
  const {itemsLeft, itemsRight, moveItemsToLeft,
    handleSelect, moveItemsToRight, selectedItem} = useDataContext();
  
  return <div className="App">
    <Box
      data={itemsLeft}
      handleSelect={handleSelect}
      selectedItem={selectedItem}
    />
    <ControlButtons
      moveToLeft={moveItemsToLeft}
      moveToRight={moveItemsToRight}/>
    <Box
      data={itemsRight}
      handleSelect={handleSelect}
      selectedItem={selectedItem}
    />
  </div>;
}
