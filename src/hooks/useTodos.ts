import { useState, useEffect } from 'react';
import { Todo } from '../types/todo';
import { getTodos, saveTodos, createTodo } from '../lib/storage';
import { useAutoHide } from './useAutoHide';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  // Add auto-hide functionality
  useAutoHide(todos, (updatedTodos) => {
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  });

  const addTodo = (title: string) => {
    const newTodo = createTodo(title);
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const updateTodo = (id: string, title: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setEditingId(null);
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  return {
    todos,
    editingId,
    setEditingId,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo
  };
};