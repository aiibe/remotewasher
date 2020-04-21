<script>
	function pushButton() {
		active = !active
	}

	export let active = false
</script>

<button on:click={pushButton} class:active={active}>
	{#if !active}
		<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M128 104.3v303.4c0 6.4 6.5 10.4 11.7 7.2l240.5-151.7c5.1-3.2 5.1-11.1 0-14.3L139.7 97.2c-5.2-3.3-11.7.7-11.7 7.1z">
			</path>
		</svg>
	{:else}
		<svg stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z">
			</path>
		</svg>
	{/if}
</button>