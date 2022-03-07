<script>
  import Card from './Card.svelte';
  import { push } from 'svelte-spa-router';

  export let peliculas;
</script>

<div class="row mt-3 animate__animated animate__fadeIn">
  {#each peliculas as pelicula}
    <div class="col-sm-4">
      <Card
        titulo={pelicula.title}
        imagen={pelicula.poster_path}
        on:ver-mas={push(`/pelicula/${pelicula.id}`)}
      />
    </div>
  {/each}
</div>
