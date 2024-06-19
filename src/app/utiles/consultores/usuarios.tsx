export async function loggearUsuario(correo: string, contrasena: string): Promise<any[]> {
    try {
      const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/loggeo-usuario?correo=${correo}&password=${contrasena}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al comprobar al comprobar usuarios', error);
      throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
    }
  }