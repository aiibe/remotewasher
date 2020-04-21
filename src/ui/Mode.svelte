<script>
	import { selectedMode } from './State'
	const mode = [{ name: 'Standard', minutes: 45 }, { name: 'Gentle', minutes: 30 }, { name: 'Fast', minutes: 15 }]

</script>

<div class="mode">
	<h1>Mode</h1>
	<div class="options">
		{#each mode as m}
			<button class:active={$selectedMode.name === m.name} on:click="{ () => selectedMode.set(m)}">
				{m.name}
				<small>{m.minutes} minutes</small>
			</button>
		{/each}
	</div>
</div>