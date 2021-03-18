import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const ShoppingCard = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h1> Shopping Card: {category}</h1>
        </div>
    );
};

export default ShoppingCard;