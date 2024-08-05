import "./styles.css";
import LeftBox from "./components/LeftBox";
import ControlButtons from "./components/ControlButtons";
import RightBox from "./components/RightBox";
import {items} from "./data";
import {useEffect, useState} from "react";

export default function App() {
  const [itemsLeft, setItemsLeft] = useState([]);
  const [itemsRight, setItemsRight] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  
  const handleSelect = (item, operation) => {
    if(operation === 'add') {
      setSelectedItem([...selectedItem, item]);
    }else {
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
    setItemsRight([])
  }, []);
  
  
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
