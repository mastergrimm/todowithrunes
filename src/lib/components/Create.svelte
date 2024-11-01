<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";

	let todos = $props();
	let text = $state("");
</script>

<div class="flex">
	<Button
		class="rounded-l-md rounded-r-none h-16 text-xl bg-cyan-800 text-white hover:bg-green-800"
		onclick={() => todos.addTodo(text)}>Add Todo</Button
	>
	<Input
		placeholder="Enter your todo"
		bind:value={text}
		class="bg-cyan-50 text-black rounded-l-none	rounded-r-md border-none outline-none text-xl h-16
		placeholder:opacity-80 placeholder:text-cyan-900 placeholder:font-medium"
	/>
</div>
