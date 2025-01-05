import { useEffect, useCallback } from 'react';
import { Todo } from '../types/todo';

export const useAutoHide = (
  todos: Todo[],
  onUpdate: (todos: Todo[]) => void,
  delay: number = 5000 // Increased from 2000ms to 5000ms
) => {
  const hideCompletedTodo = useCallback((todoId: string) => {
    setTimeout(() => {
      onUpdate(todos.filter(todo => todo.id !== todoId));
    }, delay);
  }, [todos, onUpdate, delay]);

  useEffect(() => {
    const completedTodos = todos.filter(todo => todo.completed);
    completedTodos.forEach(todo => hideCompletedTodo(todo.id));
  }, [todos, hideCompletedTodo]);
};