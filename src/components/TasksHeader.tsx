import { useSelector } from 'react-redux';
import { StateType } from '../redux';

export default function TasksHeader() {
  const tasks = useSelector((state: StateType) => state.todo);
  const undoneTasks = tasks.filter((t: Task) => t.done === false);

  return (
    <header>
      <h1>
        <i>Todo List</i> avec React et Redux !
      </h1>
      <p>
        Nombre de tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
}
