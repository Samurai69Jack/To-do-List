import { Todo } from '../types/todo';

const STORAGE_KEY = 'todos';

export const getTodos = (): Todo[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const createTodo = (title: string): Todo => ({
  id: crypto.randomUUID(),
  title,
  completed: false,
  created_at: new Date().toISOString()
});