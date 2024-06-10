import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux';

type PropType = {
  task: Task;
};

export default function TaskItem({ task }: PropType) {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className='inputLabel'
        type='checkbox'
        checked={task.done}
        onChange={() => {
          dispatch(toggleTask(task.id));
          console.log('checkbox');
        }}
      />
      {task.text}

      <span
        onClick={() => {
          dispatch(deleteTask(task.id));
          console.log('Delete', task.id);
        }}
        role='button'
        style={{ padding: '5px', marginLeft: '20px' }}
      >
        <RxCross2 />
      </span>
    </div>
  );
}

// const LabelStyled = styled.label`
//   border: 1px solid green;
//   input {
//     background: blue;
//   }
// `;
