import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
   const [category,setCategory]=useContext(CategoryContext)
    return (
        <div>
            <h2>home count: {category}</h2>
             <button  onClick={()=>setCategory(category+1)}>increasse count</button>
        </div>
    );
};

export default Header;