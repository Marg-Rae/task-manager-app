export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category: string;
  dueDate?: string;
  createdAt: string;
}

export type TaskStatus = 'all' | 'pending' | 'completed' | 'overdue' | 'due-soon';

export type Priority = 'low' | 'medium' | 'high';

export interface TaskFilters {
  searchTerm: string;
  category: string;
  priority: string;
  status: string;
  showCompleted: boolean;
}