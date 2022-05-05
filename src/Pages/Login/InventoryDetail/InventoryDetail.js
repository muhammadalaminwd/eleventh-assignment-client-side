import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventory} = useParams();
    return (
        <div>
            {inventory}
        </div>
    );
};

export default InventoryDetail;