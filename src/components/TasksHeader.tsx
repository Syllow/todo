type PropTypes = {
  tasks: Task[];
};

export default function TasksHeader({ tasks }: PropTypes) {
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
}
