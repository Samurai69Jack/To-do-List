import React, { useState, useEffect } from 'react';
import { Trash2, Check, Edit2, X } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  isEditing: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
  onCancelEdit: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  isEditing,
  onToggle,
  onDelete,
  onEdit,
  onUpdate,
  onCancelEdit
}) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (todo.completed) {
      setIsExiting(true);
    }
  }, [todo.completed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedTitle.trim()) {
      onUpdate(todo.id, editedTitle.trim());
    }
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="flex-1 px-3 py-1 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          autoFocus
        />
        <button
          type="submit"
          className="p-2 text-green-500 hover:text-green-600 transition-colors"
        >
          <Check className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={onCancelEdit}
          className="p-2 text-red-500 hover:text-red-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </form>
    );
  }

  return (
    <div className={`flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow group
                    transition-all duration-1000 ${isExiting ? 'opacity-0 transform translate-x-full' : ''}`}>
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={() => onToggle(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-500
                    ${todo.completed 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-gray-400 dark:border-gray-500'}`}
        >
          {todo.completed && <Check className="w-4 h-4 text-white" />}
        </button>
        <span className={`text-gray-900 dark:text-white transition-all duration-500 ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
          {todo.title}
        </span>
      </div>
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => onEdit(todo.id)}
          className="p-2 text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >
          <Edit2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-red-500 hover:text-red-600 transition-colors duration-300"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;