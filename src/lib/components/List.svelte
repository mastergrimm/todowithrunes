<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import { Trash2 } from "lucide-svelte";

	import { flip } from "svelte/animate";
	import { send, receive } from "$lib/transition";
	import type { Todo } from "$lib/stores/todo.svelte";
	import { todoList } from "$lib/stores/todo.svelte";
</script>

<div class="flex justify-between gap-10">
	<div class="flex-1">
		<h2>Current Todos</h2>
		{#if todoList().currentTodos.length === 0}
			<p>No todos yet</p>
		{:else}
			<div class="list">
				{#each todoList().currentTodos as todo (todo.id)}
					<div
						class="list__item"
						in:receive={{ key: todo.id }}
						out:send={{ key: todo.id }}
						animate:flip={{ duration: 300 }}
					>
						<label class="flex items-center gap-4 cursor-pointer">
							<input
								type="checkbox"
								bind:checked={todo.completed}
							/>
							<div class="list__text">{todo.text}</div>
						</label>
						<button
							class="bg-red-400 opacity-60 hover:opacity-100 p-2 rounded-md"
							onclick={() => todoList().removeTodo(todo.id)}
						>
							<Trash2 />
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div class="flex-1">
		<h2>Completed Todos</h2>
		{#if todoList().completedTodos.length === 0}
			<p>No completed todos yet</p>
		{:else}
			<div class="list">
				{#each todoList().completedTodos as todo (todo.id)}
					<div
						class="list__item list__item--completed"
						in:receive={{ key: todo.id }}
						out:send={{ key: todo.id }}
						animate:flip={{ duration: 300 }}
					>
						<label class="flex items-center gap-4 cursor-pointer">
							<input
								type="checkbox"
								bind:checked={todo.completed}
							/>
							<div class="list__text">{todo.text}</div>
						</label>
						<button
							class="bg-red-400 opacity-60 hover:opacity-100 p-2 rounded-md"
							onclick={() => todoList().removeTodo(todo.id)}
						>
							<Trash2 />
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	h2 {
		@apply text-2xl text-white font-medium;
	}

	p {
		@apply my-8;
	}

	.list {
		@apply flex flex-col gap-4 mt-5;
	}

	.list__item {
		@apply bg-orange-300 text-black p-4 rounded-lg flex gap-4 items-center justify-between font-medium text-lg;
	}

	.list__item--completed {
		@apply opacity-50 hover:opacity-100 transition-all duration-300;
	}

	input[type="checkbox"] {
		transform: scale(1.5);
	}
</style>
