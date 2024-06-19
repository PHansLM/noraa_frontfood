"use client";

import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const Page: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerificar, setPasswordVerificar] = useState('');
    const [telefono, setTelefono] = useState('');
    const [intentoSumbit, setIntentoSumbit] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [contador, setContador] = useState(10);

    const [hasUpperCase, setHasUpperCase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [passwordLength, setPasswordLength] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);


    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (registroExitoso) {
            interval = setInterval(() => {
                setContador((prevContador) => prevContador - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [registroExitoso]);

    useEffect(() => {
        if (contador === 0) {
            window.close();
        }
    }, [contador]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!nombre || !correo || !apellido || !password || !passwordVerificar) {
            setIntentoSumbit(true);
            return;
        }
        if (passwordVerificar !== password) {
            console.error('Las contraseñas no son iguales');
            return;
        }
        if (!validatePassword(password)) {
            console.error('La contraseña debe contener al menos una letra mayúscula y un número');
            return;
        }
        try {
            const response = await fetch('https://noraa-backend-6v2teu43ta-tl.a.run.app/usuario-registrar', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    telefono: telefono,
                    correo: correo,
                    password: password
                })
            });
            if (response.ok) {
                console.log('Usuario registrado exitosamente');
                setRegistroExitoso(true);
            } else {
                console.error('Error al registrar al usuario:', response.statusText);
            }
        } catch (error) {
            console.error('Error al registrar al usuario:', error);
        }
    };

    const validatePassword = (password: string) => {
        const upperCaseCheck = /[A-Z]/.test(password);
        const numberCheck = /\d/.test(password);
        const lengthCheck = password.length >= 8;
        setHasUpperCase(upperCaseCheck);
        setHasNumber(numberCheck);
        setPasswordLength(lengthCheck);
        return upperCaseCheck && numberCheck && lengthCheck;
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);


        const upperCaseRegex = /[A-Z]/;
        setHasUpperCase(upperCaseRegex.test(newPassword));


        const numberRegex = /\d/;
        setHasNumber(numberRegex.test(newPassword));


        setPasswordLength(newPassword.length >= 8);
    };
    const handlePasswordVerifyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = event.target.value;
        setPasswordVerificar(confirmPassword);

        if (confirmPassword === password) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const charCode = event.key;
        const isLetter = /^[A-Za-zÀ-ÿ\u00f1\u00d1\s]$/.test(charCode);
        if (!isLetter && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };

    return (
        <section className="bg-gray-50 bg-cover bg-center" style={{ backgroundImage: "url('fondoLogin.jpg')" }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Regístrate en Noraa
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
                                    type="text"
                                    placeholder="Ingresa tu apellido"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-gray-900">Número de Teléfono</label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    id="telefono"
                                    pattern="[0-9]*"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
                                    placeholder="Ingresa tu número de teléfono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    onKeyPress={(e) => {
                                        const isNumber = /^[0-9]*$/.test(e.key);
                                        if (!isNumber) {
                                            e.preventDefault();
                                        }
                                    }}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
                                    placeholder="usuario@email.com"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <p className={`text-sm mt-1 ${hasUpperCase ? 'text-green-500' : 'text-red-500'}`}>
                                    {hasUpperCase ? '✓' : '✗'} La contraseña debe tener al menos una mayúscula
                                </p>
                                <p className={`text-sm mt-1 ${hasNumber ? 'text-green-500' : 'text-red-500'}`}>
                                    {hasNumber ? '✓' : '✗'} La contraseña debe tener al menos un número
                                </p>
                                <p className={`text-sm mt-1 ${passwordLength ? 'text-green-500' : 'text-red-500'}`}>
                                    {passwordLength ? '✓' : '✗'} La contraseña debe tener al menos 8 caracteres
                                </p>
                            </div>
                            <div>
                                <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900">Confirma tu contraseña</label>
                                <input
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5"
                                    onChange={handlePasswordVerifyChange}
                                    required
                                />
                                {hasUpperCase && hasNumber && passwordLength && (
                                    <p className={`text-sm mt-1 ${passwordsMatch ? 'text-green-500' : 'text-red-500'}`}>
                                        {passwordsMatch ? '✓ Las contraseñas coinciden' : '✗ Las contraseñas no coinciden'}
                                    </p>
                                )}
                            </div>

                            <button type="submit" className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                                Registrarse
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                ¿Ya estás registrado? <a href="/login" className="font-medium text-orange-500 hover:underline">Iniciar sesión</a>
                            </p>
                        </form>
                    </div>
                </div>
                {registroExitoso && (
                    <div className="fixed bottom-0 left-0 w-full bg-green-500 flex justify-center items-center p-4">
                        <div>
                            <h1 className="text-2xl font-bold text-white">¡Usuario registrado exitosamente!</h1>
                            <p className="text-white">{`Cerrando la página automáticamente en ${contador} segundos`}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Page;
