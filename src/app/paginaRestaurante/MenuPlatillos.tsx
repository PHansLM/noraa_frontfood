import React, { useEffect, useState } from 'react';
import { cargarPlatillosPorMenu } from '../utiles/consultores/restaurantes';
import ImgConstructor from '../utiles/multimedia/ImgConstructor';

interface MenuPlatillosProps {
  idMenu: number;
}

const MenuPlatillos: React.FC<MenuPlatillosProps> = ({ idMenu }) => {
  const [platillos, setPlatillos] = useState<any[]>([]);

  useEffect(() => {
    if (idMenu) {
      cargarPlatillosPorMenu(idMenu)
        .then(data => {
          setPlatillos(data);
        })
        .catch(error => {
          console.error('Error al cargar los platillos del menú:', error);
        });
    }
  }, [idMenu]);

  return (
    <div className=''>
      {platillos.length > 0 ? (
        <ul className="grid md:grid-cols-3 gap-6 items-center">
          {platillos.map(platillo => (
            <li key={platillo.id_consumible} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row max-w-md w-full mx-auto transform transition-transform duration-300 hover:bg-gray-100 lg:h-56 h-80">
              <div className="p-4 flex flex-col justify-between w-full sm:w-2/3 h-full">
                <div className="h-full">
                  <h3 className="text-xl font-semibold mb-2">{platillo.nombre_consumible}</h3>
                  <p className="text-gray-700 mb-2 line-clamp-2">{platillo.descripcion_consumible}</p>
                </div>
                <div className="h-full flex flex-col justify-end">
                  <p className="text-gray-900 font-bold">Bs: {platillo.precio_consumible}</p>
                </div>
              </div>
              <div className="relative w-full sm:w-1/3 h-full">
                <ImgConstructor
                  imgBytea={platillo.foto_consumible}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  className="lg:w-full lg:h-full object-cover rounded-lg lg:mt-2 ml-4 sm:mb-2 lg:ml-0 lg:mb-0"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuPlatillos;