<script lang="ts">
	import Create from "$lib/components/Create.svelte";
	import List from "$lib/components/List.svelte";

	import { createTodoList } from "$lib/stores/todo.svelte";

	const todos = createTodoList();

	$effect(() => {
		$inspect(todos);
	});
</script>

<div class="px-12 py-24 w-full max-w-screen-lg mx-auto flex flex-col gap-10">
	<div class="flex flex-col gap-2">
		<div class="text-5xl font-bold">My Todo List</div>
		<div class="text-xl text-cyan-50 font-normal tracking-wide">
			Created using Svelte Rune Stores
		</div>
	</div>
	<Create {...todos} />
	<List {...todos} />
</div>
