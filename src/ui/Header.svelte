<script>
	import { derived } from 'svelte/store'
	import { timer, power } from './State'

	let minutes = derived(timer, $timer => Math.floor(($timer % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }))
	let seconds = derived(timer, $timer => Math.floor(($timer % (1000 * 60)) / 1000).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }))

</script>

<div class="header">
	<button class="back">
		<svg fill="#222" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z">
			</path>
		</svg>
	</button>
	<button class="timer">
		{#if $power}
			<span>{$minutes}</span>
			<span>:</span>
			<span>{$seconds}</span>
		{:else}
			<span> </span>
			<span> </span>
			<span> </span>
		{/if}
	</button>
</div>