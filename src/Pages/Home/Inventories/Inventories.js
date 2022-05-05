import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])
    return (
        <div id='inventories' className='container'>
        <div className="row">
        <h1 className='inventories-title text-center m-4'>OUR INVENTORIES</h1>

        <div className='inventories-container'>
        {
            inventories.map(inventory => <Inventory
                key={inventory._id}
                inventory={inventory}
                >
                </Inventory>)
        }
        </div>
        
        </div>
            
        </div>
    );
};

export default Inventories;