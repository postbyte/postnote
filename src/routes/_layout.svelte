<script>
	import Nav from '../components/Nav.svelte';

	// export let segment;
</script>

<style>
	main {
		max-width: 62rem;
		margin: 0 auto;
	}
</style>

<!-- <Nav {segment}/> -->

<main p="10 sm3">

  <section py="4">
    <slot />
  </section>

  <footer>
    <nav>
      <div>
        <a href="https://github.com/atav1k/">Github</a> / 
        <a href="/">Postnote</a> &copy; {new Date().getFullYear()}
      </div>
    </nav>
  </footer>
</main>