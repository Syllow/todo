import { useState } from 'react';
import TasksHeader from './components/TasksHeader';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Faire les courses', done: false },
    { id: 2, text: 'Corriger des copies', done: true },
  ]);

  const addTask = (text: string) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  const toggleTask = (id: number) => {
    const realTask = tasks.find((t) => t.id === id);
    if (realTask !== undefined) {
      const index = tasks.findIndex((t) => t.id === id);
      const taskCopy = { ...realTask };
      const tasksListCopy = [...tasks];

      taskCopy.done = !taskCopy.done;
      tasksListCopy[index] = taskCopy;
      setTasks(tasksListCopy);
    }
  };

  return (
    <div className='container'>
      <article>
        <TasksHeader tasks={tasks} />
        <TasksList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <footer>
          <TaskForm addTask={addTask} />
        </footer>
      </article>
    </div>
  );
}
