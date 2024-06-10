import TaskForm from './components/TaskForm';
import TasksHeader from './components/TasksHeader';
import TasksList from './components/TasksList';

export default function App() {
  return (
    <div>
      <article>
        <TasksHeader />
        <TasksList />
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>
  );
}
