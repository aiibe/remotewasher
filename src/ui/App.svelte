<script>
	import Header from './Header.svelte'
	import Content from './Content.svelte'
	import Mode from './Mode.svelte'
</script>

<div class="container">
	<div class="wrap">
		<Header />
		<div class="greeting">
			<h1>Smart Washing</h1>
			<h2>Machine</h2>
		</div>
		<Content />
		<Mode />
	</div>
</div>