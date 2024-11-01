export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

const TodoExample = [
	{
		id: 1,
		text: 'Learn Svelte',
		completed: false
	},
	{
		id: 2,
		text: 'Learn TypeScript',
		completed: true
	},
	{
		id: 3,
		text: 'Learn GraphQL',
		completed: false
	},
	{
		id: 4,
		text: 'Learn React',
		completed: false
	},
	{
		id: 5,
		text: 'Learn Vue',
		completed: false
	},
	{
		id: 6,
		text: 'Learn Angular',
		completed: false
	}
]

let todos: Todo[] = $state(TodoExample);

export function todoList() {
	function addTodo(text: string) {
		todos.push({
			id: todos.length + 1,
			text: text,
			completed: false
		});
	}


	function removeTodo(id: number) {
		todos = todos.filter(todo => todo.id !== id);
	}

	function toggleCompleted(id: number) {
		todos = todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
	}

	function clearCompleted() {
		todos = todos.filter(todo => !todo.completed);
	}

	return {
		get allTodos() {
			return todos;
		},
		get currentTodos() {
			return todos.filter(todo => !todo.completed);
		},
		get completedTodos() {
			return todos.filter(todo => todo.completed);
		},
		addTodo,
		removeTodo,
		toggleCompleted,
		clearCompleted
	}
}
