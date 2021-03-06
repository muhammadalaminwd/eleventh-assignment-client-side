import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Form, Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Inventory from '../../Home/Inventory/Inventory';

const InventoryDetail = () => {
    const {id} = useParams();

    
    const [inventories, setInventories] = useState({});

    useEffect( () => {
        fetch(`https://dry-earth-80985.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [id])
    
    console.log(inventories)
    // const inventory = inventories.find(item => item._id === id);
    // const {_id, img, name, description, price, quantity, supplierName } = inventory;
    return (
        <div>
        <div className='inventory'>
        <img className='w-30 mt-4' src={inventories.img} alt="" />
        <h2>{inventories.name}</h2>
        <p><small>{inventories.description}</small></p>
        <p>Price: {inventories.price}</p>
        <p>Quantity: {inventories.quantity}</p>
        <p>Supplier Name: {inventories.supplierName}</p>
        <button className='btn'>Delivered</button>
    </div>
        <div>
        <h1>Restock the items</h1>
        <input type="text" name="" id="" placeholder='Add value'/>
        <button className='btn mx-3'>Restock</button>
        </div>
    </div>
    );
};

export default InventoryDetail;