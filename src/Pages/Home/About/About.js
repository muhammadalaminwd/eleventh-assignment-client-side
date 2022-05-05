import React from 'react';
import vegetables from '../../../images/images/vegetables.png'
import './About.css'

const About = () => {
    return (
        <div className='row mt-5 align-items-center'>
        <div className='col-xs-6 col-lg-6 col-md-6 col-sm-12'><img className='col-sm-12' src={vegetables}  width=""/></div>
        <div className='col-xs-6 col-lg-6 col-md-6 col-sm-12'>
        <p><small>About us</small></p>        
        <h1>We Are The best Inventory Provider in Dhaka</h1>
        <p className='about-us'>Fresh Warehouse is known for the grocery stock available company. We keep fruits and vegetables fresh. Our target is to provide fresh and healthy grocery for our customers. Firstly we get the vegetables and fruits from the farmers land directly. Then that day we keep these to our factory. Then start the cleaning and packaging process. After that we send the inventories to our storage where it's safe in a good temparature. When our customers order our products we provide them in a day. So it's totally fresh and healthy. We identify the bad products and through it these out in the cleaning process. Client satisfiction is our main priority. If our clients are happy, Fresh Warehouse also happy. Have a good day!</p>
        <button className='bg-success text-white read-more'>Read More</button>
        </div>
    </div>
    );
};

export default About;