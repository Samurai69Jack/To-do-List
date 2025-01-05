import React from 'react';
import { useThemeStore } from './store/themeStore';
import Navbar from './components/Navbar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
  const isDark = useThemeStore((state) => state.isDark);
  const {
    todos,
    editingId,
    setEditingId,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo
  } = useTodos();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            <TodoInput onAdd={addTodo} />
            <TodoList
              todos={todos}
              editingId={editingId}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={setEditingId}
              onUpdate={updateTodo}
              onCancelEdit={() => setEditingId(null)}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;