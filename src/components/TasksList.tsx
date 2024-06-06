import TaskItem from './TaskItem';

type PropTypes = {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

export default function TasksList({
  tasks,
  toggleTask,
  deleteTask,
}: PropTypes) {
  return (
    <>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
}
