import "./styles.css";
import LeftBox from "./components/LeftBox";
import ControlButtons from "./components/ControlButtons";
import RightBox from "./components/RightBox";
import {items} from "./data";
import {useEffect, useState} from "react";
import {useDataContext} from "./context/DataContext";


export default function App() {
  const {itemsLeft, itemsRight, moveItemsToLeft,
    handleSelect, moveItemsToRight, selectedItem} = useDataContext();
  
  return <div className="App">
    <LeftBox
      data={itemsLeft}
      handleSelect={handleSelect}
      selectedItem={selectedItem}
    />
    <ControlButtons
      moveToLeft={moveItemsToLeft}
      moveToRight={moveItemsToRight}/>
    <RightBox
      data={itemsRight}
      handleSelect={handleSelect}
      selectedItem={selectedItem}
    />
  </div>;
}
