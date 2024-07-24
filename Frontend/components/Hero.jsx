"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hero = () => {
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7157/api/Advertisement/all') // URL backendowego API
            .then(response => {
                setAdvertisements(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the advertisements!', error);
            });
    }, []);

    return (
        <div>
            <h1 className='text-3xl'>Advertisements</h1>
            <ul>
                {advertisements.map(ad => (
                    <li key={ad.id}>{ad.title}: {ad.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default Hero;