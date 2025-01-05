import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <nav className="border-b border-gray-600/10 dark:border-gray-300/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Todo List</h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;