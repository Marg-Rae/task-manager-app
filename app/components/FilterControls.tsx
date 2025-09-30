'use client';

import { Search, Filter, X } from 'lucide-react';

interface FilterControlsProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedPriority: string;
  onPriorityChange: (priority: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  categories: string[];
  showCompleted: boolean;
  onShowCompletedChange: (show: boolean) => void;
}

export default function FilterControls({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPriority,
  onPriorityChange,
  selectedStatus,
  onStatusChange,
  categories,
  showCompleted,
  onShowCompletedChange
}: FilterControlsProps) {
  const clearFilters = () => {
    onSearchChange('');
    onCategoryChange('');
    onPriorityChange('');
    onStatusChange('');
  };

  const hasActiveFilters = searchTerm || selectedCategory || selectedPriority || selectedStatus;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter size={20} className="text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-800">Filter & Search</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 ml-auto"
          >
            <X size={16} />
            <span>Clear all</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Search */}
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Priority Filter */}
        <select
          value={selectedPriority}
          onChange={(e) => onPriorityChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>

        {/* Status Filter */}
        <select
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="overdue">Overdue</option>
          <option value="due-soon">Due Soon</option>
        </select>
      </div>

      {/* Show Completed Toggle */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="showCompleted"
          checked={showCompleted}
          onChange={(e) => onShowCompletedChange(e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <label htmlFor="showCompleted" className="text-sm text-gray-700">
          Show completed tasks
        </label>
      </div>
    </div>
  );
}