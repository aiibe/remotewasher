<script>
	import { fade } from 'svelte/transition'
	import { isRunning, modalOpen, timer, power, selectedMode } from './State'

	let interval
	function runMachine() {

		if ($power) isRunning.set(!$isRunning)

		if ($isRunning) {
			interval = setInterval(() => {
				timer.update(time => time - 1000) //ms
				if ($timer == 0) {
					clearInterval(interval)
					isRunning.set(false)
				}
			}, 1000)
		} else clearInterval(interval)
	}

	function switcher() {
		power.set(!$power)

		// Default mode
		selectedMode.set('Super Fast')
		timer.set(1 * 60 * 1000)

		// Switch OFF
		if (!$power) {
			isRunning.set(false)
			selectedMode.set('')
			clearInterval(interval)
		}
	}

</script>

<div class="control-buttons">

	<!-- ON/OFF -->
	<button class:active={$power} on:click="{switcher}">
		{#if $power}
			<svg class="{$isRunning ? 'power-run' : 'power-on'}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M279.1 48h-46.2v231.1h46.2V48zm111.6 50.2L357.9 131c36.5 29.4 59.9 74.4 59.9 125 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-50.6 23.3-95.7 59.6-125.3l-32.6-32.6C76.4 136.3 48 192.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-63.3-28.4-119.7-73.3-157.8z">
				</path>
			</svg>
		{:else}
			<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M279.1 48h-46.2v231.1h46.2V48zm111.6 50.2L357.9 131c36.5 29.4 59.9 74.4 59.9 125 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-50.6 23.3-95.7 59.6-125.3l-32.6-32.6C76.4 136.3 48 192.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-63.3-28.4-119.7-73.3-157.8z">
				</path>
			</svg>
		{/if}

	</button>

	<!-- Choose water level -->
	<button on:click="{() => modalOpen.set(!$modalOpen)}" class:active={$modalOpen}>
		<svg stroke="#222" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
		</svg>
	</button>

	<!-- Play/Pause -->
	<button on:click="{runMachine}" class:active={$isRunning}>
		{#if !$isRunning}
			<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" transition:fade>
				<path
					d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z">
				</path>
			</svg>
		{:else}
			<svg stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" transition:fade>
				<path
					d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z">
				</path>
			</svg>
		{/if}
	</button>

</div>