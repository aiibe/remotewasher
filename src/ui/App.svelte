<script>
	import Header from './Header.svelte'
	import Controls from './Controls.svelte'
	import Animator from './Animator.svelte'
	import Mode from './Mode.svelte'
	import Modal from './Modal.svelte'
</script>

<div class="app">
	<div class="wrap">
		<Header />
		<div class="greeting">
			<h1>Smart Washing</h1>
			<h2>Machine</h2>
		</div>
		<div class="content-body">
			<Controls />
			<Animator />
		</div>
		<Mode />
	</div>
	<Modal />
</div>