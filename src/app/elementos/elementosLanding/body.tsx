import React from 'react';

const Body: React.FC = () => {
  return (
    <div className='bg-cover bg-center' style={{backgroundImage: "url('fondoLanding.jpg')"}}>
      <nav className="border-gray-400 rounded-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center lg:text-3xl font-bold whitespace-nowrap text-white text-lg">Noraa</span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type='button' className='lg:mr-4 text-orange-700 lg:text-lg bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-2xl px-4 py-2 text-center text-sm'>Quienes somos?</button>
            <a href="/login">
              <button type="button" className="text-orange-700 lg:text-lg bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-2xl px-4 py-2 text-center text-sm">Iniciar sesion</button>
            </a>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          </div>
        </div>
      </nav>
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0 ml-4 md:ml-20">
        </div>
        <div className="md:pt-20 pb-4 md:pb-10 flex flex-col md:flex-row items-center justify-center z-10 h-full">
          <div className="mr-4 md:mr-10 max-w-screen-md text-left">
            <h1 className="text-white text-3xl md:text-9xl font-bold mb-2 md:mb-4 lg:mr-4 md:mr-7 lg:ml-3 ml-10">Descubre Nuevos Restaurantes</h1>
            <h1 className="text-slate-200 text-3xl md:text-9xl font-bold mb-2 md:mb-4 mr-4 md:mr-7 lg:ml-3 ml-10">con Noraa</h1>
            <a href="/home">
              <button type='button' className=' lg:ml-3 ml-10 text-base md:text-lg mt-4 md:mt-8 lg:mr-4 text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-2xl px-4 py-2 text-center transition-transform duration-300 ease-in-out transform hover:scale-105'>
                Prueba Nora
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
