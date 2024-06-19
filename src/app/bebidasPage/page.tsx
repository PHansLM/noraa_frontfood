"use client";
import { useEffect, useState } from "react";
import Header from "../principal/Header";
import PiePagina from "../principal/piePagina";
import { cargarRestaurantesConEtiqueta } from "../utiles/consultores/restaurantes";
import ListaLocales from "../elementos/ListaLocales";
const Page = () => {

  return ( 
    <div className="overflow-hidden">
      <Header />
      <h1 className="font-bold text-2xl mt-6 ml-6 mb-4">Bebidas</h1>
      <ListaLocales etiqueta="bar"/>
      <PiePagina />
    </div>
  );
};

export default Page;