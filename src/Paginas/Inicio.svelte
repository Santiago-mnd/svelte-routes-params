<script>
  import Error from './Error.svelte';
  import Grid from '../Componentes/Grid.svelte';
  import Loader from '../Componentes/Loader.svelte';
  const url =
    'https://api.themoviedb.org/3/movie/popular?api_key=e2406b1dbbda0dd7627d5e1954a619eb&language=en-US&page=1';

  let peliculas = [];
  const ajax = async () => {
    const res = await fetch(url);
    const { results } = await res.json();
    peliculas = results;

    if (res.ok) {
      return peliculas;
    } else {
      throw new Error('Error en la conexión con la API');
    }
  };
  const promesa = ajax();
  // apikey  e2406b1dbbda0dd7627d5e1954a619eb
</script>

<h1>Películas más populares del momento</h1>
{#await promesa}
  <Loader />
{:then peliculas}
  <Grid {peliculas} />
{:catch error}
  <p style="color:red;">{error}</p>
{/await}
