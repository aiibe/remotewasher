<script>
	import { fade, fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { modalOpen } from './State'
	import Water from './Water.svelte'
</script>

{#if $modalOpen}
	<div class="modal" transition:fade on:click="{() => modalOpen.set(false)}"></div>
	<div class="modal-wrap">
		<div class="modal-content" transition:fly="{{ duration: 500, x: -400, opacity: 1, easing: quintOut}}">
			<Water />
		</div>
	</div>
{/if}