// Define a TypeScript interface `Task` with properties `id` (number), `title` (string), and `isCompleted` (boolean).
// Write a function that takes an array of `Task` objects and returns a new array containing only the tasks that are not completed (`isCompleted` is `false`).
// The returned array should be typed to allow only the `id` and `title` properties (excluding `isCompleted`) in its objects.

// Example:
// ```typescript
// interface Task {
//   id: number;
//   title: string;
//   isCompleted: boolean;
// }

// const tasks = [
//   { id: 1, title: "Write report", isCompleted: true },
//   { id: 2, title: "Attend meeting", isCompleted: false },
//   { id: 3, title: "Review code", isCompleted: false }
// ];
// // Expected output: [
// //   { id: 2, title: "Attend meeting" },
// //   { id: 3, title: "Review code" }
// // ]
// ```

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface incompleteTask {
  id: number;
  title: string;
}

function getIncompleteTasks(tasks: Task[]): incompleteTask[] {
  const incompleteTasks = tasks
    .filter((task) => !task.isCompleted)
    .map((task) => ({ id: task.id, title: task.title }));
  return incompleteTasks;
}

const tasks = [
  { id: 1, title: "Write report", isCompleted: true },
  { id: 2, title: "Attend meeting", isCompleted: false },
  { id: 3, title: "Review code", isCompleted: false },
];

const result = getIncompleteTasks(tasks);
console.log(result);
