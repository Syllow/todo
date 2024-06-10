import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { StateType } from '../redux';

export default function TasksList() {
  const tasks = useSelector((state: StateType) => state.todo);
  return (
    <>
      {tasks.map((t: Task) => (
        <TaskItem task={t} key={t.id} />
      ))}
    </>
  );
}
