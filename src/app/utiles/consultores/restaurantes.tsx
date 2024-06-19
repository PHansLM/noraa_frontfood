// consultasRestaurantes.ts

export async function cargarCercanos(lat: number, lng: number): Promise<any[]> {
  try {
    const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/restaurantes-cercanos?latitud=${lat}&longitud=${lng}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes cercanos:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

export async function cargarCercanosLimitados(lat: number, lng: number, limite: number): Promise<any[]> {
  try {
    const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/restaurantes-cercanos-limitados?latitud=${lat}&longitud=${lng}&limite=${limite}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes cercanos:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

export async function cargarRestaurantes(): Promise<any[]> {
  try {
    const response = await fetch('https://noraa-backend-6v2teu43ta-tl.a.run.app/restaurantes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

export async function cargarRestaurantesConFiltro(filtro: string): Promise<any[]> {
  try {
    const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/restaurantes-filtrar?filtro=${filtro}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

export async function cargarRestaurantesPorEmail(email: string): Promise<any[]> {
  try {
    const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/restaurantes-correo?correo=${email}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

export async function cargarRestaurantePorId(id: string): Promise<any[]> {
  try {
    const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/restaurante-por-id?id_buscado=${id}`);
    const data = await response.json();
    console.log(data.nombre_restaurante);
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

export async function cargarRestaurantesConEtiqueta(etiqueta: string): Promise<any[]> {
  try {
    const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/restaurantes-por-etiqueta?etiqueta=${etiqueta}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

export async function cargarMenusDeUnRestaurante(id_restaurante: string): Promise<any[]> {
  try {
    const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/menus-por-restaurante?id_restaurante=${id_restaurante}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

export async function cargarPlatillosPorMenu(id_menu: number): Promise<any[]> {
  try {
    const response = await fetch(`https://noraa-backend-6v2teu43ta-tl.a.run.app/platillos-del-menu?id_menu=${id_menu}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los restaurantes:', error);
    throw error; // También puedes lanzar el error para que sea manejado por el llamador de la función
  }
}

// Otras funciones relacionadas con consultas de restaurantes...
