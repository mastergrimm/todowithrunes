<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="">{@render children()}</main>

<style lang="postcss">
	:global(body) {
		font-family: 'Inter', sans-serif;
		@apply bg-cyan-950 text-white font-sans;
	}
</style>

