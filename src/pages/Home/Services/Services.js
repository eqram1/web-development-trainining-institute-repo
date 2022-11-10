import React, { useEffect, useState } from 'react';

const services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/logout')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <p className="text-3xl font-bold text-blue-700">Services</p>
                <h3 className="text-2xl font-extrabold text-orange-400">Our Services area</h3>
                <p>Our services is for online web developer created purpose.At present in the world maximum peoples engaged in web related works.In future it will increase day by day.So,If you wish your next bright future with honestly,we think this institute is best for yours.Wish your good luck.</p>
            </div>
            <div>
                <h2>services: {services.length}</h2>
                {

                }
            </div>
        </div>
    );
};

export default services;