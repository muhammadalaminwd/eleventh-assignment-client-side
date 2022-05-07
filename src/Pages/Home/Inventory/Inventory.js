import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({inventory}) => {
    const {_id, img, name, description, price, quantity, supplierName } = inventory;
    const navigate = useNavigate();
    const navigateInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='inventory'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name: {supplierName}</p>
            <button onClick={() => navigateInventoryDetail(_id)} className='btn'>Update</button>
        </div>
    );
};

export default Inventory;