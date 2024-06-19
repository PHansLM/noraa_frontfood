import ListaLocales from "../elementos/ListaLocales";
import Header from "../principal/Header";
import PiePagina from "../principal/piePagina";

const Page = () => {

  return ( 
    <div className="overflow-hidden">
      <Header />
      <h1 className="font-bold text-2xl mt-6 ml-6 mb-4">Restaurantes</h1>
      <ListaLocales etiqueta="restaurante"/>
      <PiePagina />
    </div>
  );
};

export default Page;