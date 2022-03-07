<script>
  import { createEventDispatcher } from 'svelte';
  const disptach = createEventDispatcher();
  export let titulo;
  export let imagen;

  const ver = () => {
    disptach('ver-mas');
  };
</script>

<div class="card mb-3" style="width:18rem;">
  <img
    class="card-img-top"
    src={`https://image.tmdb.org/t/p/w400${imagen}`}
    alt={titulo}
    width="100%"
    height="400"
  />
  <div class="card-body">
    <h4 class="card-title">{titulo}</h4>
    <button on:click={ver} class="btn btn-primary">Ver más...</button>
  </div>
</div>

<style>
  img {
    object-fit: cover;
  }
</style>
