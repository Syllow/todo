import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux';
import styled from 'styled-components';

export default function TaskForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(addTask(text));

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Ajouter une tâche'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
