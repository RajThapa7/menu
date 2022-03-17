import logo from './logo.svg';
import Menu from './menu'
import Category from './category'
import './App.css';
import items from "./data"
import { useState } from "react"

const allCategory = ['all',... new Set(items.map((item)=> item.category))]
function App() {
  const [menu, setMenu] = useState(items);
  const [category, setCategory] = useState(allCategory)
  const filterItems = (categories)=>{
  if (categories === 'all') {
    setMenu(items);
    return;
  }
  const newItems = items.filter((item) => item.category === categories);
  setMenu(newItems);

}

  return (
    <>
    <Category category={category} filterItems={filterItems} /> 
    <Menu menu = {menu}/>
    </>
  );
}

export default App;
