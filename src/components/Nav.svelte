<script>
	export let segment;
</script>

<nav>
  <div>
    <a class={segment === undefined ? 'bold' : ''} href=".">Home</a>
    <a rel="prefetch" class={segment === 'feed' ? 'bold' : ''} href="feed">Feed</a>
    <a class={segment === 'note' ? 'bold' : ''} href="note">Note</a>
    <a class={segment === 'about' ? 'bold' : ''} href="about">About</a>
  </div>
</nav>
