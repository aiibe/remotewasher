<script>
	import { modalOpen, waterLevel } from './State'
	import { fly } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import { onMount } from 'svelte'

	const maxWaterLevel = 1200

	let mover, moverTop, moverHeight

	onMount(() => {
		moverHeight = mover.getBoundingClientRect().height
		let quantityPx = $waterLevel * moverHeight / maxWaterLevel
		let topStart = moverHeight - quantityPx
		mover.style.top = topStart + 'px'
	})


	let willClose = false
	function goBack() {
		willClose = true
		modalOpen.set(false)
	}

	// Mouse events

	let moved, mouseStartY

	function mouseDown(event) {
		moved = true
		moverTop = mover.offsetTop
		mouseStartY = event.clientY
	}

	function mouseMove(event) {
		event.preventDefault()

		if (moved) {
			let dragDistance = - (mouseStartY - event.clientY)
			let newTop = moverTop + dragDistance
			let quantityPx = moverHeight - newTop
			event.target.style.top = newTop + 'px'
			waterLevel.update(w => quantityPx * maxWaterLevel / moverHeight)
		}
	}

	// Touch events

	let touchMoved, touchStartY

	function touchDown(event) {
		event.preventDefault()

		touchMoved = true
		moverTop = event.target.offsetTop
		touchStartY = event.touches[0].clientY
	}

	function touchMove(event) {
		event.preventDefault()

		if (touchMoved) {
			let dragDistance = - (touchStartY - event.touches[0].clientY)
			let newTop = moverTop + dragDistance
			let quantityPx = moverHeight - newTop
			event.target.style.top = newTop + 'px'
			waterLevel.update(w => quantityPx * maxWaterLevel / moverHeight)
		}
	}

</script>

<div class="water">
	<div>
		<button class="back" class:active={willClose} on:click={goBack}>
			<svg fill="#222" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z">
				</path>
			</svg>
		</button>
	</div>
	<div class="greeting">
		<h1>Water</h1>
		<h2>Set water level</h2>
	</div>
	<div class="water-picker">
		<div class="glider">
			<div class="level">
				<div class="mover" bind:this={mover} on:mousedown={mouseDown} on:mousemove={mouseMove}
					on:mouseup="{() => moved = false}" on:touchstart={touchDown} on:touchmove={touchMove}
					on:touchEnd="{ () => touchMoved = false}"
					transition:fly="{{ delay: 500, duration: 700, y: 400, opacity: 1, easing: quintOut}}"></div>
			</div>
		</div>
	</div>
	<div class="greeting current-level">
		<h2>Current</h2>
		<h1>{Math.round($waterLevel)}</h1>
	</div>
</div>