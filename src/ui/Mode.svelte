<script>
	import { selectedMode, timer, isRunning } from './State'
	const mode = [{ name: 'Standard', minutes: 45 }, { name: 'Gentle', minutes: 30 }, { name: 'Super Fast', minutes: 1 }]

	function setMode(m) {
		if (!$isRunning) {
			selectedMode.set(m.name)
			timer.set(m.minutes * 60 * 1000) // ms
		}
	}

</script>

<div class="mode">
	<h1>Mode</h1>
	<div class="options">
		{#each mode as m}
			<button class:active={$selectedMode === m.name} on:click="{ () => setMode(m) }">
				{m.name}
				<small>{m.minutes} minutes</small>
			</button>
		{/each}
	</div>
</div>