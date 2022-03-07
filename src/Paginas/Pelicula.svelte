<script>
  import { onMount } from 'svelte';
  export let params = {};
  let id = params.id;

  const url = `https://api.themoviedb.org/3/movie/`;
  const key = '?api_key=e2406b1dbbda0dd7627d5e1954a619eb&language=en-US';
  const finalUrl = `${url}${id}${key}`;

  let pelicula = [];
  let generos = [];

  onMount(async () => {
    const res = await fetch(finalUrl);
    pelicula = await res.json();
    generos = await pelicula.genres;
    console.log(pelicula);
  });
</script>

<div class="row mt-5 animate__animated animate__fadeIn">
  <div class="col-lg-6">
    <img
      src={`https://image.tmdb.org/t/p/w400${pelicula.poster_path}`}
      alt={pelicula.title}
      width="100%"
      height="700"
    />
  </div>
  <div class="col-lg-6">
    <h2>{pelicula.title}</h2>
    <p>{pelicula.overview}</p>
    {#each generos as genero}
      <h4>{genero.name}</h4>
    {/each}
    <p>Score:</p>
    <div class="rating" align="center">
      {pelicula.vote_average}
    </div>
  </div>
</div>

<style>
  .rating {
    width: 300px;
    border: 2px solid black;
    font-size: 4rem;
    font-weight: bolder;
  }
  img {
    object-fit: cover;
  }
</style>
