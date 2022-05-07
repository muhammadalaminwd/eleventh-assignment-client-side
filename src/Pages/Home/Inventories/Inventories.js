import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventories.css'

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    const navigate = useNavigate();
    const navigateInventoryDetail = id => {
        navigate(`/inventory/${id}`);
        console.log(id)
    }

    useEffect( () => {
        fetch('https://dry-earth-80985.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])
    return (
        <div id='inventories' className='container'>
        <div className="row">
        <h1 className='inventories-title text-center m-4'>OUR INVENTORIES</h1>

        <div className='inventories-container'>
        {
            inventories.map(inventory =>         <div className='inventory'>
            <img className='w-100' src={inventory.img} alt="" />
            <h2>{inventory.name}</h2>
            <p><small>{inventory.description}</small></p>
            <p>Price: {inventory.price}</p>
            <p>Quantity: {inventory.quantity}</p>
            <p>Supplier Name: {inventory.supplierName}</p>
            <button onClick={() => navigateInventoryDetail(inventory._id)} className='btn'>Update</button>
        </div>)
        }
        </div>
        
        </div>
        <button as={Link} to="/manageinventories" className='mt-5 bg-success text-white'>Manage Inventories</button>
        </div>
    );
};

export default Inventories;