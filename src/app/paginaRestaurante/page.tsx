"use client";
import React, { useEffect, useState } from 'react';
import Header from '../principal/Header';
import InfoRestaurante from './infoRestaurante';
const Page = () => {


  const [restaurantId, setRestaurantId] = useState('');

  useEffect(() => {
    const id = localStorage.getItem('selectedRestaurantId');
    setRestaurantId(id+"");
  }, []);


  return ( 
    <>
    <Header></Header>
    <div className="container mx-auto mt-4">
        <InfoRestaurante idRestaurante={restaurantId} /> {/* Pasa el ID del restaurante al componente InfoRestaurante */}
      </div>
    </>
  );
};

export default Page;

