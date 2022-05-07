import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {id} = useParams();

    
    const [inventories, setInventories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])
    const inventory = inventories.find(item => item._id === id);
    const {_id, img, name, description, price, quantity, supplierName } = inventory;

    return (
        <div>
            
        </div>
    );
};

export default InventoryDetail;