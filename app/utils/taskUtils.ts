import { Task, TaskFilters } from '../types';

export function isTaskOverdue(task: Task): boolean {
  if (!task.dueDate || task.completed) return false;
  return new Date(task.dueDate) < new Date();
}

export function isTaskDueSoon(task: Task): boolean {
  if (!task.dueDate || task.completed) return false;
  const dueDate = new Date(task.dueDate);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return dueDate <= tomorrow && dueDate >= new Date();
}

export function filterTasks(tasks: Task[], filters: TaskFilters): Task[] {
  let filtered = tasks;

  // Search filter
  if (filters.searchTerm) {
    const searchLower = filters.searchTerm.toLowerCase();
    filtered = filtered.filter(task =>
      task.title.toLowerCase().includes(searchLower) ||
      task.description.toLowerCase().includes(searchLower) ||
      task.category.toLowerCase().includes(searchLower)
    );
  }

  // Category filter
  if (filters.category) {
    filtered = filtered.filter(task => task.category === filters.category);
  }

  // Priority filter
  if (filters.priority) {
    filtered = filtered.filter(task => task.priority === filters.priority);
  }

  // Status filter
  if (filters.status) {
    filtered = filtered.filter(task => {
      switch (filters.status) {
        case 'completed':
          return task.completed;
        case 'pending':
          return !task.completed;
        case 'overdue':
          return isTaskOverdue(task);
        case 'due-soon':
          return isTaskDueSoon(task);
        default:
          return true;
      }
    });
  }

  // Show/hide completed tasks
  if (!filters.showCompleted) {
    filtered = filtered.filter(task => !task.completed);
  }

  return filtered;
}

export function sortTasks(tasks: Task[]): Task[] {
  return tasks.sort((a, b) => {
    // First sort by completion status
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    
    // Then by priority
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
    if (priorityDiff !== 0) return priorityDiff;
    
    // Then by due date
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (a.dueDate && !b.dueDate) return -1;
    if (!a.dueDate && b.dueDate) return 1;
    
    // Finally by creation date (newest first)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function getUniqueCategories(tasks: Task[]): string[] {
  const categorySet = new Set(tasks.map(task => task.category).filter(Boolean));
  return Array.from(categorySet).sort();
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'high': return 'border-red-500 bg-red-50';
    case 'medium': return 'border-yellow-500 bg-yellow-50';
    case 'low': return 'border-green-500 bg-green-50';
    default: return 'border-gray-300 bg-white';
  }
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString();
}

export function formatDateTime(dateString: string): string {
  return new Date(dateString).toLocaleString();
}