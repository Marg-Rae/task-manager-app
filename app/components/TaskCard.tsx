'use client';

import { useState } from 'react';
import { Edit3, Trash2, Check, Calendar, Clock } from 'lucide-react';
import { Task } from '../types';
import { isTaskOverdue, isTaskDueSoon, getPriorityColor, formatDate } from '../utils/taskUtils';

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Task>) => void;
}

export default function TaskCard({ task, onToggleComplete, onDelete, onUpdate }: TaskCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description,
    priority: task.priority,
    category: task.category,
    dueDate: task.dueDate || ''
  });

  const getPriorityColorLocal = (priority: string) => {
    return getPriorityColor(priority);
  };

  const handleSave = () => {
    onUpdate(task.id, {
      title: editData.title,
      description: editData.description,
      priority: editData.priority,
      category: editData.category,
      dueDate: editData.dueDate || undefined
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      category: task.category,
      dueDate: task.dueDate || ''
    });
    setIsEditing(false);
  };

  const isOverdue = isTaskOverdue(task);
  const isDueSoon = isTaskDueSoon(task);

  return (
    <div
      className={`task-card p-6 rounded-lg shadow-md border-l-4 transition-all ${getPriorityColorLocal(task.priority)} ${
        task.completed ? 'opacity-75' : ''
      } ${isOverdue ? 'ring-2 ring-red-300' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Task title"
                />
                <textarea
                  value={editData.description}
                  onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={2}
                  placeholder="Task description"
                />
                <div className="flex space-x-2">
                  <select
                    value={editData.priority}
                    onChange={(e) => setEditData({ ...editData, priority: e.target.value as 'low' | 'medium' | 'high' })}
                    className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                  <input
                    type="text"
                    value={editData.category}
                    onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                    className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Category"
                  />
                </div>
                <input
                  type="datetime-local"
                  value={editData.dueDate}
                  onChange={(e) => setEditData({ ...editData, dueDate: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
                  >
                    <Check size={14} />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-1 bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors"
                  >
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className={`text-gray-600 mt-1 ${task.completed ? 'line-through' : ''}`}>
                    {task.description}
                  </p>
                )}
                <div className="flex items-center flex-wrap gap-2 mt-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                  </span>
                  {task.category && (
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                      {task.category}
                    </span>
                  )}
                  <span className="text-xs text-gray-500 flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{formatDate(task.createdAt)}</span>
                  </span>
                  {task.dueDate && (
                    <span className={`text-xs px-2 py-1 rounded-full flex items-center space-x-1 ${
                      isOverdue ? 'bg-red-100 text-red-800' :
                      isDueSoon ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      <Calendar size={12} />
                      <span>Due: {formatDate(task.dueDate)}</span>
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <Edit3 size={16} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}