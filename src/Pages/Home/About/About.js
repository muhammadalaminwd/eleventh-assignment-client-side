import React from 'react';
import vegetables from '../../../images/images/vegetables.png'

const About = () => {
    return (
        <div className='row mt-5'>
        <div className='col-xs-6 col-lg-6 col-md-6 col-sm-12'><img className='col-sm-12' src={vegetables}  width=""/></div>
        <div className='col-xs-6 col-lg-6 col-md-6 col-sm-12'>
        <p><small>About us</small></p>
        <h1>We Are The best Inventory Provider in Dhaka</h1>
        <p>Fresh Warehouse is known for the grocery stock available company. We keep fruits and vegetables fresh. </p>
        <button className='bg-success text-white'>Read More</button>
        </div>
    </div>
    );
};

export default About;