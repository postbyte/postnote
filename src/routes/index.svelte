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
		<p>More than notes. Connect ideas in new ways.</p>
	</li>
	<li cell>
		<ul list p="4" bg="gray2" mb="6">
			<li>Topics: Include 1-3 topics with each note.</li>
			<li>Lists: Add notes to public or private lists.</li>
			<li>Relationships: Reference any other $note.</li>
			<li>Scrape: Pull draft notes from feeds.</li>
		</ul>
	</li>
	<li cell>
		<h3>Note</h3>
		<p>A simple reference. No vanity information.</p>
	</li>
	<li cell>		
		<ul list p="4" bg="gray2" mb="6">
			<li>Notes: The plaintext link and post.</li>
			<li>Replies: Plaintext threads.</li>
			<li>Types: Support for email and messages.</li>
			<li>Reactions: Respond by emoji.</li>
			<li>Log: Track changes.</li>
		</ul>
	</li>
</ul>