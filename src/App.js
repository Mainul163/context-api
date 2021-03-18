
import { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import ShoppingCard from './Component/ShoppingCard/ShoppingCard';
export const CategoryContext =createContext();
function App() {
  const[count,setCount]=useState(0)
  return (
    <CategoryContext.Provider value={[count,setCount]}>
      <h1>Home Count: {count}</h1>

     <Header></Header>

     <Home></Home>
         
      <ShoppingCard></ShoppingCard>
     </CategoryContext.Provider>
  );
}

export default App;
