import Inicio from './Paginas/Inicio.svelte';
import Error from './Paginas/Error.svelte';
import Pelicula from './Paginas/Pelicula.svelte';

const router = {
  '/': Inicio,
  '/pelicula/:id': Pelicula,
  '/*': Error,
};

export default router;
