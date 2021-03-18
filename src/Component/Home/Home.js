import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Home = () => {
   const [category]=useContext(CategoryContext)
    return (
        <div>
            <h3> home count :{category}</h3>
        </div>
    );
};

export default Home;