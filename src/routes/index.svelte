<style>
[list]{
	border-left: 1px solid var(--gray-6);
}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Postnote</h1>
<h2>Sharing Is Sense-making.</h2>
<p>Postnote is bookmarking and knowledge sharing for teams. We help your team manage insights and ideas: list, categorize, reply, relate, and share.</p>
<p>Try postnote by visiting our team's bookmark repository.</p>

<ul mt="8" grid columns="2" gap="2">
	<li cell>
		<h3>Post</h3>
		<p>More than notes. Connect people and ideas better.</p>
	</li>
	<li cell>
		<ul list grid columns="1" gap=4 p="4" bg="gray2" mb="6">
			<li cell><b>Topics</b><br/>Include 1-3 topics with each note.</li>
			<li cell><b>Lists</b><br/>Add notes to public or private lists.</li>
			<li cell><b>Relationships</b><br/>Reference any other $note.</li>
			<li cell><b>Scrape</b><br/>Pull draft notes from feeds.</li>
		</ul>
	</li>
	<li cell>
		<h3>Note</h3>
		<p>A simple reference. No vanity information.</p>
	</li>
	<li cell>		
		<ul list grid columns="1" gap="4" p="4" bg="gray2" mb="6">
			<li><b>Notes</b><br/>The plaintext link and post.</li>
			<li><b>Replies</b><br/>Plaintext threads.</li>
			<li><b>Types</b><br/>Support for email and messages.</li>
			<li><b>Reactions</b><br/>Respond by emoji.</li>
			<li><b>Log</b><br/>Track changes.</li>
		</ul>
	</li>
</ul>