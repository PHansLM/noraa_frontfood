export async function cargarEtiquetas(): Promise<any[]> {
    try {
      const response = await fetch('https://noraa-backend-6v2teu43ta-tl.a.run.app/etiquetas');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al cargar las etiquetas:', error);
      throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
    }
  }