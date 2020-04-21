<script>
	import Button from './Button.svelte'
</script>

<div class="content-body">
	<div class="control-buttons">
		<button class="indicator">
			<svg viewBox="0 0 8 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path>
			</svg>
		</button>
		<button>
			<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M279.1 48h-46.2v231.1h46.2V48zm111.6 50.2L357.9 131c36.5 29.4 59.9 74.4 59.9 125 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-50.6 23.3-95.7 59.6-125.3l-32.6-32.6C76.4 136.3 48 192.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-63.3-28.4-119.7-73.3-157.8z">
				</path>
			</svg>
		</button>
		<button>
			<svg stroke="#222" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
			</svg>
		</button>
		<Button />
	</div>

	<div class="animator">
		<div class="draw">
			<div class="machine">
				<div class="inside">
					<div class="spin"></div>
				</div>
			</div>
		</div>
	</div>
</div>