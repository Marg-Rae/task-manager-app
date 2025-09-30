'use client';

import { CheckCircle, Clock, AlertTriangle, Calendar } from 'lucide-react';
import { Task } from '../types';
import { isTaskOverdue, isTaskDueSoon } from '../utils/taskUtils';

interface TaskStatsProps {
  tasks: Task[];
}

export default function TaskStats({ tasks }: TaskStatsProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  
  const highPriorityTasks = tasks.filter(task => 
    task.priority === 'high' && !task.completed
  ).length;
  
  const overdueTasks = tasks.filter(task => isTaskOverdue(task)).length;
  
  const dueSoonTasks = tasks.filter(task => isTaskDueSoon(task)).length;

  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const stats = [
    {
      label: 'Total Tasks',
      value: totalTasks,
      icon: Clock,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      label: 'Completed',
      value: completedTasks,
      icon: CheckCircle,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      label: 'Pending',
      value: pendingTasks,
      icon: Clock,
      color: 'bg-orange-500',
      textColor: 'text-orange-600'
    },
    {
      label: 'High Priority',
      value: highPriorityTasks,
      icon: AlertTriangle,
      color: 'bg-red-500',
      textColor: 'text-red-600'
    },
    {
      label: 'Overdue',
      value: overdueTasks,
      icon: AlertTriangle,
      color: 'bg-red-500',
      textColor: 'text-red-600'
    },
    {
      label: 'Due Soon',
      value: dueSoonTasks,
      icon: Calendar,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600'
    }
  ];

  return (
    <div className="mb-8">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${stat.color} bg-opacity-10`}>
                  <Icon size={20} className={stat.textColor} />
                </div>
              </div>
              <div className={`text-2xl font-bold ${stat.textColor}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      {totalTasks > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Progress</h3>
            <span className="text-sm text-gray-600">{completionRate}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {completedTasks} of {totalTasks} tasks completed
          </div>
        </div>
      )}
    </div>
  );
}