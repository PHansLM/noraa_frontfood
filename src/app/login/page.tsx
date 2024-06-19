"use client";
import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { loggearUsuario } from '../utiles/consultores/usuarios';

const Page: React.FC = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [intentoSumbit, setIntentoSumbit] = useState(false);
    const [inicioExitoso, setInicioExitoso] = useState(false);
    const [contador, setContador] = useState(5);

   
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!correo || !password) {
            setIntentoSumbit(true);
            return;
        }
        loggearUsuario(correo, password)
        .then(data => {
            if (data.length == 0) {
                console.error('Correo o contraseña incorrecta');
            } else {
                console.log('Logueado');
                setInicioExitoso(true);
            }
        })
    };

    // Redirige al usuario a la página de inicio después del inicio de sesión exitoso
    useEffect(() => {
        if (inicioExitoso) {
            const timeoutId = setTimeout(() => {
                window.location.href = '/home'; // Redirige al usuario a la ruta /home
            }, 2000); // Espera 5 segundos antes de redirigir
            return () => clearTimeout(timeoutId);
        }
    }, [inicioExitoso]);

    return (
        <section className="bg-gray-50 bg-cover bg-center" style={{ backgroundImage: "url('fondoLogin.jpg')" }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Inicio de sesión
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5" placeholder="usuario@email.com" 
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                        required 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5" 
                                        onChange={(e) => setPassword(e.target.value)}
                                        required 
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Guardar información</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-orange-400 hover:underline">¿Olvidaste tu contraseña?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Iniciar sesión</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                ¿No tienes cuenta en Noraa? <a href="/register" className="font-medium text-orange-400 hover:underline">Regístrate</a>
                            </p>
                        </form>
                    </div>
                </div>
                {inicioExitoso && (
                    <div className="fixed bottom-0 left-0 w-full bg-green-500 flex justify-center items-center p-4">
                        <div>
                            <h1 className="text-2xl font-bold text-white">¡Sesión iniciada correctamente!</h1>
                            <p className="text-white">{`Redirigiendo...`}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

// Exporta el componente Page
export default Page;
