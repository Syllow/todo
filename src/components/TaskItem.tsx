import { RxCross2 } from 'react-icons/rx';

type PropType = {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

export default function TaskItem({ task, toggleTask, deleteTask }: PropType) {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />
        {task.text}

        <span
          onClick={() => deleteTask(task.id)}
          role='button'
          style={{ padding: '5px', marginLeft: '20px' }}
        >
          <RxCross2 />
        </span>
      </label>
    </div>
  );
}
