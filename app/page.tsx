'use client';

import { useState, useMemo } from 'react';
import TaskCard from './components/TaskCard';
import AddTaskForm from './components/AddTaskForm';
import FilterControls from './components/FilterControls';
import TaskStats from './components/TaskStats';
import ErrorBoundary from './components/ErrorBoundary';
import { useTasks } from './hooks/useTasks';
import { Task, TaskFilters } from './types';
import { filterTasks, sortTasks, getUniqueCategories } from './utils/taskUtils';

function TaskManagerContent() {
  const { tasks, addTask, updateTask, deleteTask, toggleComplete } = useTasks();
  
  const [filters, setFilters] = useState<TaskFilters>({
    searchTerm: '',
    category: '',
    priority: '',
    status: '',
    showCompleted: true
  });

  // Get unique categories for filtering
  const categories = useMemo(() => getUniqueCategories(tasks), [tasks]);

  // Filter and sort tasks
  const filteredTasks = useMemo(() => {
    const filtered = filterTasks(tasks, filters);
    return sortTasks(filtered);
  }, [tasks, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Task Manager</h1>
          <p className="text-gray-600">Stay organized and boost your productivity</p>
        </div>

        {/* Task Statistics */}
        <TaskStats tasks={tasks} />

        {/* Add Task Form */}
        <AddTaskForm onAddTask={addTask} categories={categories} />

        {/* Filter Controls */}
        <FilterControls
          searchTerm={filters.searchTerm}
          onSearchChange={(term) => setFilters({ ...filters, searchTerm: term })}
          selectedCategory={filters.category}
          onCategoryChange={(category) => setFilters({ ...filters, category })}
          selectedPriority={filters.priority}
          onPriorityChange={(priority) => setFilters({ ...filters, priority })}
          selectedStatus={filters.status}
          onStatusChange={(status) => setFilters({ ...filters, status })}
          categories={categories}
          showCompleted={filters.showCompleted}
          onShowCompletedChange={(showCompleted) => setFilters({ ...filters, showCompleted })}
        />

        {/* Tasks List */}
        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-12 fade-in">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                {tasks.length === 0 ? 'No tasks yet' : 'No tasks match your filters'}
              </h3>
              <p className="text-gray-500">
                {tasks.length === 0 
                  ? 'Add your first task to get started!' 
                  : 'Try adjusting your search or filter criteria.'}
              </p>
            </div>
          ) : (
            filteredTasks.map((task, index) => (
              <div key={task.id} className="slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TaskCard
                  task={task}
                  onToggleComplete={toggleComplete}
                  onDelete={deleteTask}
                  onUpdate={updateTask}
                />
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Task Manager App - Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default function TaskManager() {
  return (
    <ErrorBoundary>
      <TaskManagerContent />
    </ErrorBoundary>
  );
}