import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdvertisementList = () => {
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7157/api/Advertisement/all') 
            .then(response => {
                setAdvertisements(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the advertisements!', error);
            });
    }, []);

    return (
        <div>
            <h2>Advertisements</h2>
            <ul>
                {advertisements.map(ad => (
                    <li key={ad.id}>{ad.title}: {ad.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default AdvertisementList;