import { useState } from 'react';

type PropTypes = {
  addTask: (text: string) => void;
};

export default function TaskForm({ addTask }: PropTypes) {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTask(text);

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
