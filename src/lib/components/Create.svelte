<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";

	import { todoList } from "$lib/stores/todo.svelte";

	let text = $state("");

	function addTodo() {
		todoList().addTodo(text);
		text = "";
	}
</script>

<form class="flex">
	<Button
		type="submit"
		class="rounded-l-md rounded-r-none h-16 text-xl bg-cyan-800 text-white hover:bg-green-800"
		onclick={() => addTodo()}>Add Todo</Button
	>
	<Input
		placeholder="Enter your todo"
		bind:value={text}
		class="bg-cyan-50 text-black rounded-l-none	rounded-r-md border-none outline-none text-xl h-16
		placeholder:opacity-80 placeholder:text-cyan-900 placeholder:font-medium"
	/>
</form>
