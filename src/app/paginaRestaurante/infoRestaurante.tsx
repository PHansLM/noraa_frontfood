import React, { useEffect, useState } from 'react';
import { cargarRestaurantePorId, cargarMenusDeUnRestaurante } from '../utiles/consultores/restaurantes';
import ImgConstructor from '../utiles/multimedia/ImgConstructor';
import MenuPlatillos from './MenuPlatillos'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto
import Mapa from '../mapas/Mapa';

interface InfoRestauranteProps {
  idRestaurante: string;
}

const InfoRestaurante: React.FC<InfoRestauranteProps> = ({ idRestaurante }) => {
  const [restaurante, setRestaurante] = useState<any>();
  const [menus, setMenus] = useState<any[]>([]);

  useEffect(() => {
    if (idRestaurante !== "") {
      cargarRestaurantePorId(idRestaurante)
        .then(data => {
          if (data && data.length > 0) {
            setRestaurante(data[0]);
            cargarMenusDeUnRestaurante(idRestaurante)
              .then(menusData => {
                setMenus(menusData);
              })
              .catch(error => {
                console.error('Error al cargar los menús del restaurante:', error);
              });
          } else {
            console.error('No hay restaurantes con ese ID');
            setRestaurante(null);
          }
        })
        .catch(error => {
          console.error('Error al obtener restaurante por ID:', error);
          setRestaurante(null);
        });
    } else {
      setRestaurante(null);
    }
  }, [idRestaurante]);

  if (typeof restaurante === 'undefined') {
    return null;
  }

  return (
    <div>
      {restaurante !== null && (
        <div>
          <div className='flex flex-row items-start'>
            {restaurante.imagen && (
              <ImgConstructor
                imgBytea={restaurante.imagen}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                className="h-80 rounded-xl max-w-full drop-shadow-lg"
              />
            )}
            <div className='flex flex-col mb-9 ml-10'>
              <p className='font-bold text-2xl'>{restaurante.nombre_restaurante}</p>
              <p className='font-medium mt-2'>{restaurante.direccion}</p>
              <p className='font-medium'>Teléfono: {restaurante.telefono}</p>
              <p className='font-medium'>Horario de atención: {restaurante.horario_atencion}</p>
              <p className='font-medium'>Valoración: {restaurante.valoracion}</p>
            </div>

          </div>
          <hr className="w-full my-2 border-gray-300" />

          <div>
            
          </div>
          <div>
            {menus.map(menu => (
              <div className='mt-10 mb-5' key={menu.id_menu}>
                <h3 className='font-semibold text-lg mb-5'>{menu.nombre_menu}</h3>
                <MenuPlatillos idMenu={menu.id_menu} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoRestaurante;
